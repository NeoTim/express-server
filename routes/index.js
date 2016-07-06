var express = require('express');
var router = express.Router();

var data = [{id:'',name:''}]
/* GET home page. */
router.get('/getData', function(req, res, next) {
  res.send({data : data});
});

router.post('/getData', function (req,res,next) {
    res.send({data : data});
});

module.exports = router;
