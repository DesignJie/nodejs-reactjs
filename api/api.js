var express = require('express');
var router = express.Router();

router
	.get('/', function(req, res, next) {
	  	res.send({
			status : 1,
			data : 'demo data'
		});
	})
	.post('/', function(req, res, next) {
	  	res.send({
			status : 1,
			data : 'post data'
		});
	});

module.exports = router;

