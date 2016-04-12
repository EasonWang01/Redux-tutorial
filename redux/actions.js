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
	},
	con:()=>{
		return (dispatch,getState)=>{
			
			 var xhttp = new XMLHttpRequest();
			  xhttp.open("POST", "/ajax");
			  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
              xhttp.onreadystatechange = function() {
             if (xhttp.readyState == 4 && xhttp.status == 200) {
     console.log(xhttp.responseText);
    }
}
              xhttp.send();
              
		}
	}
}


export default actions

