import {applyMiddleware,compose,createStore} from "redux"
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const initialState ={};

// use initial state to create store and pass to provider

let finalCreateStore = compose(
	applyMiddleware(thunk,logger())
	)(createStore)

export function configureStore(initialState){
	return finalCreateStore(reducer,initialState)

}

let store = configureStore(initialState)

export default store