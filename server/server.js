var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var database = require('./mongo.js')

database.connect()
database.saveCat()
var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo:true,publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));


app.post('/ajax',function(req,res){
	
	res.end("success123");
})

app.get('*', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));


});



var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
