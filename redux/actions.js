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

	}
}


export default actions