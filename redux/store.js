import {applyMiddleware,compose,createStore} from "redux"
import reducer from './reducer'
import logger from 'redux-logger'


let initialState = {
	visbility:'SHOW_ALL',
	todos:[{
		id:0,
		completed: false,
		text:'initial for demo'

	}]
}


let finalCreateStore = compose(
	applyMiddleware(logger())
	)(createStore)

function configureStore(initialState){
	return finalCreateStore(reducer,initialState)

}

let store = configureStore(initialState)

export default store