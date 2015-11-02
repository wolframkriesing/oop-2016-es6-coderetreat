var path = require("path");
var webpack = require("webpack");
module.exports = {
	cache: true,
	entry: './src/main.js',
	output: {
		path: path.join(__dirname, "dist"),
		publicPath: "dist/",
		filename: "bundle.js",
		chunkFilename: "[chunkhash].js"
	},

	plugins: [
    new webpack.optimize.UglifyJsPlugin()

	],

	module: {
		loaders: [
			{ test: path.join(__dirname, 'src'), loader: 'babel-loader' }
		]
	}
};
