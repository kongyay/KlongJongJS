var express = require('express');
var router = express.Router();
var KlongAPI = require('../controllers/klong');
var wordController = require('../controllers/wordController');
var fs = require('fs');



router.get('/', function (req, res, next) {
  
});



router.get('/find/:word', async (req, res, next) => {
 
    var word = req.params.word;
    var json = req.query.json;

    var group = KlongAPI.getGroup(word);
    var data = await wordController.getWord({name:word,group:group,count:0,tag:[]});
    if(data == null)
        data =  {"name":"*ไม่มีคำตอบ*"};

    if(!json)
        res.render('index', { title: word , data : data });
    else
        res.json(data);
});

router.get(/find$/, async (req, res, next) => {
  var word = req.query.word;
  var group = KlongAPI.getGroup(word);
  var data = await wordController.getWord({name:word,group:group,count:0,tag:[]});

  if(data == null)
      data =  {"name":"*ไม่มีคำตอบ*"};

  res.json(data);
});

router.get('/group/:word', function (req, res, next) {
  var word = req.params.word;
  var group = KlongAPI.getGroup(word);
  res.render('index', { title: word, data: group });
});

router.get('/list', async (req, res, next) => {
    res.render('index', { title: 'List' , data : await wordController.list() });
});

router.get('/list/:group', async (req, res, next) => {
    var group = req.params.group;
  
    res.render('index', { title: 'List' , data : await wordController.list() });
});


router.get('/test', function (req, res, next) {
  var testWord = {
    name: "ทดสอบ",
    group: "ออบ",
    count: 2,

    groupSep: ['อด', 'ออบ'],
    tag: ['กริยา'],
    created_at: new Date(),
  };

  wordController.save(testWord, res);
});


router.get('/restructure', function (req, res, next) {

  fs.readFile('words.json', 'utf8', function (err, data) {
    if (err)
      console.log('restructure read err')
    var obj = JSON.parse(data);
    var newStruct = [];
    for (var group in obj) {
      for (var count in obj[group]) {
        for (var each in obj[group][count].Word) {
          var impWord = {
            name: obj[group][count].Word[each].word,
            group: group,
            count: parseInt(count),

            groupSep: [],
            tag: obj[group][count].Word[each].tag,
            created_at: new Date()
          };

          newStruct.push(impWord);

        }
      }
    }
    fs.writeFile("words-new.json", JSON.stringify(newStruct), function (err) {
      if (err)
        console.log('restructure write err')

        res.render('index', {
          title: 'Done',
          data: 'gg'
        });

    });

    

  });
});

module.exports = router;