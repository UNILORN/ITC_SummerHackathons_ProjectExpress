var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/chat',function(req,res,next){
  res.render('chat',{ title: 'ChatRoom' });
});

router.get('/screen',function(req,res,next){
  res.render('screen',{ title: 'Screen' });
});

module.exports = router;
