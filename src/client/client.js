import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import root from './root.js'
import {Provider} from 'react-redux'
import {configureStore} from '../redux/store'
import {Router, browserHistory, Route} from 'react-router';

const initialState = window.__PRELOADED_STATE__;

const store = configureStore(initialState);

ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory} routes={root} />
	</Provider>
,document.getElementById('app')
)
