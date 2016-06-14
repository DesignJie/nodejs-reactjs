var express = require('express');
var router = express.Router();

module.exports = function(app){
	/* GET home page. */

	app.use('*', function(req, res, next) {
		if(/(api|json)+/gi.test(req.baseUrl)){
			next();
		}
		else{
			res.render('index/index')
		}
	});

	app.use('/api', function(req, res, next){
		res.send('1212');
	});

}
