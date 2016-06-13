var webpack = require('webpack');

module.exports = {
	entry : {
		indexMin : './public/index/js/index.js'
	},
	output : {
		path : './public/index/js/',
		publicPath : './public/index/js/',
		filename : '[name].js'
	},
	module : {
		loaders : [
			{
				test : /\.jsx?$/,
				loader : 'babel',
				exclude : /node_modules/,
				query: {
	      		presets: ['react','es2015']
	    		}
    		},
    		{test : /\.scss$/, loader : 'style!css!sass'},
			{test : /\.css$/, loader: 'style!css' },
			{test : /\.(png|jpg)$/, loader : 'url?limit=8192'}
		]
	},
	resolve : {
		extensions : ['', '.js', '.jsx', '.json', '.ts']
	},
	watch : true
}
