import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import store from '../redux/store'
import {Provider} from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'
import TodoList from '../components/TodoList.js'
import TodoInput from '../components/TodoInput.js'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} >
     <Router history={history}>
      <Route path="/" foo="bar" component={App}>
         <Route path="/as" component={TodoList}/>
         <Route path="/aas" component={TodoInput}/>
      </Route>
    </Router> 
  </Provider>,
  document.getElementById('app')
)
