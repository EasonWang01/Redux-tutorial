var getId = 1 ;

export function todos(state=[],action){
	switch(action.type){
		case 'ADD_TODO':
			return [...state,{
				  text:action.text,
				  completed:false,
				  id:++getId
				}]

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
