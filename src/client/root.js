import React from 'react';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';
import App from '../containers/App'
import TodoList from '../containers/TodoList.js'

export default (
      <Router history={browserHistory} component={App}>
        <Route path="/" component={App} />
        <Route path="/a" component={TodoList} />
      </Router>
);
