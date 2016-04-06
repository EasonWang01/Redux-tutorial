let  actions ={ 
	addTodo:(text)=>{
		return ({
	type:'ADD_TODO',
	text:text})
},
	toggleTodo:(id)=>{
		return({
	type:'TOGGLE_TODO',
	id:id,
	})

	},
	FilterTodo:(filter)=>{
		return({
	type:'SET_VISBILITY_FILTER',
	filter:filter		

		})
	}
}


export default actions