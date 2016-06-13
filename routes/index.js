var express = require('express');
var router = express.Router();

// router.get('/', function(req, res, next){

// 	res.render('index/index')

// });

// module.exports = router;

module.exports = function(app){
	/* GET home page. */

	app.get('/', function(req, res, next) {
		res.render('index/index')
	});

	app.get('/name', function(req, res, next){
		res.render('index/index')
	});

	app.get('/name/detail', function(req, res, next){
		res.render('index/index')
	});

	app.get('/hello', function(req, res, next){
		res.render('index/index')
	});

}
