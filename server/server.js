var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';
import root from '../client/root.js';
import {Provider} from 'react-redux'
import {configureStore} from '../redux/store'
const routes = createRoutes(root);


var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo:true,publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('./dist'));


app.post('/ajax',function(req,res){
	
	res.end("success");
})

let initialState = {
	visbility:'SHOW_ALL',
	todos:[{
		id:0,
		completed: false,
		text:'initial for demo'

	}]
}


const store = configureStore(initialState);

app.get('*', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<Provider store={store}><RouterContext {...renderProps} /></Provider>);
      let state = store.getState();
      let page = renderFullPage(content, state);
      return res.status(200).send(page);
    } else {
      res.status(404).send('Not Found');
    }
  });
});

const renderFullPage = (html, preloadedState) => (`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Todo List</title>
</head>
<body>
  <div id="app">${html}</div>
  <script>
  window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
   </script>
  <script src="vendor.bundle.js"></script>
  <script src="bundle.js"></script>
</body>
</html>
`
);

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
