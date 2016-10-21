import {applyMiddleware,compose,createStore} from "redux"
import reducer from './reducers/index.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunk,logger())
	)(createStore)

export function configureStore(initialState){
	return finalCreateStore(reducer,initialState)

}
