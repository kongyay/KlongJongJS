var Word = require('../models/word');
var WordController = {};


WordController.list = async () => {
  try {
    return await Word.find({}).exec();
  } catch(err) {
    return 'ERROR: '+err;
  }
};

WordController.getOne = async  () => {
  try {
    return await Word.findOne({}).exec();
  } catch(err) {
    return 'ERROR: '+err;
  }

};

WordController.getWord = async (obj) => {
  var query = { "group": obj.group, "count": ((obj.count>0)? obj.count: {$gt: obj.count} )  };
  
  try {
    var max = await Word.count(query).exec();
    var random = Math.floor(Math.random() * max);
    return await Word.findOne(query).skip(random).exec();
  } catch (err) {
    return {};
  }
};

WordController.save = async (req,res) => {
  var newWord = Word(req);

  try {
    await newWord.save();
    console.log('Word created!: '+req.name);
  } catch (err) {
    res.render('../views/index',{ title: 'Can\'t Insert' , data : req.name});
  }
};



module.exports = WordController;