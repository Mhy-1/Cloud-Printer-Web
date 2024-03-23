var express = require('express');
var router = express.Router();
let username = "John Doe";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , username: username});
});

module.exports = router;
