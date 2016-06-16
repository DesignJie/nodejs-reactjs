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


	/* Get index api */

	app.use('/api/api', require('../api/api'));
}

