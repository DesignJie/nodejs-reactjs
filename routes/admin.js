var express = require('express');
var router = express.Router();

module.exports = function(app){
	
	app.use('/admin', function(req, res, next){
		res.render('index/index', { title: 'admin Express' });
	});
	
}
