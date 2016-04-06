let getId = 1 ;

export default function reducer(state,action){
	switch(action.type){
		case 'ADD_TODO':
			
			return(	Object.assign({},state,{
				todos:[{
				  text:action.text,
				  completed:false,
				  id:getId++

				},...state.todos]
			})
			)
		case 'TOGGLE_TODO':

      return Object.assign({},state,{todos:state.todos.map(function(state){
                if(state.id!==action.id){
                return  state
                };

                return {...state,completed:!state.completed}
           
			}) }
      )

      	case 'SET_VISBILITY_FILTER':

      	return Object.assign({},state,{visbility:action.filter}) 
	

				

		default:
			return state;

	}

}