import { combineReducers } from 'redux'

let getId = 1 ;

function todos(state=[],action){
	switch(action.type){
		case 'ADD_TODO':
			
			return [{
				  text:action.text,
				  completed:false,
				  id:getId++

				},...state]
			
		case 'TOGGLE_TODO':

      return state.map(function(state){
                if(state.id!==action.id){
                return  state
                };

                return {...state,completed:!state.completed}
           
			}) 

		default:
			return state;

	}

}



function visbility(state="SHOW_ALL",action){
	switch(action.type){
		case 'SET_VISBILITY_FILTER':

      	return action.filter
	

		default:
			return state;
 }
}








const rootReducer = combineReducers({
  visbility,
  todos,
})


export default rootReducer