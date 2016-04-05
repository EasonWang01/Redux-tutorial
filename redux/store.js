import {applyMiddleware,compose,createStore} from "redux"
import reducer from './reducer'
import logger from 'redux-logger'


let initialState = {
	todos:[{
		id:0,
		completed: false,
		text:'initial for demo'

	}]
}


let finalCreateStore = compose(
	applyMiddleware(logger())
	)(createStore)

function configureStore(initialState = { todos:[]}){
	return finalCreateStore(reducer,initialState)

}

let store = configureStore(initialState)

export default store