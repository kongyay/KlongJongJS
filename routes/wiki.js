var express = require('express');
var router = express.Router();
const rp = require('request-promise')

router.get('/', (req, res, next) => {
    var word = req.query.word;
    findWiki(res,word);
});

router.get('/:word', (req, res, next) => {
    var word = req.params.word;
    findWiki(res,word);
});

module.exports = router;


function findWiki(res,word) {
    const options = {
        method: "GET",
        json: true,
        uri: encodeURI("https://th.wikipedia.org/api/rest_v1/page/summary/"+word)
      };

    var data = rp(options)
    .then(function (data) {
        data = {"text":data.extract};
        console.log("Wiki: "+word);
        res.json(data);
    })
    .catch(function (err) {
        options.uri = encodeURI("https://en.wikipedia.org/api/rest_v1/page/summary/"+word);

        data = rp(options)
        .then(function (data) {
            data = {"text":data.extract};   
            console.log("Wiki: "+word);
            res.json(data);
        })
        .catch(function (err) {
            data = {"text":"ไม่รู้เหมือนกัน"};
            console.log("Wiki(Not Found): "+word);
            res.json(data);
        });
    });
}