var express = require('express');
var router = express.Router();
var KlongAPI = require('../controllers/klong');
var wordController = require('../controllers/wordController');
var fs = require('fs');

router.get('/', function (req, res, next) {
  res.render('index',{title:'Welcome',data:'ใข้ /api นะจ๊ะ'});
});


module.exports = router;