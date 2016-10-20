import React from 'react';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import App from '../components/App'
import TodoList from '../components/TodoList.js'
import TodoInput  from '../components/TodoInput.js'



export default (
      <Router history={browserHistory} component={App}>
        <Route path="/" foo="bar" component={App} />
        <Route path="/a" foo="bar" component={TodoList} />
      </Router> 
);
