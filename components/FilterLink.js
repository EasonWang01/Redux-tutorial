import React, { Component } from 'react'
import action from '../redux/actions.js'
import store from '../redux/store'
class FliterLink extends Component {

	render(){
		if(this.props.currentFilter==this.props.filter){
			return <span> </span>
		}

	return	<a  href='#'
			onClick={e=>{
				e.preventDefault();
				//console.log(this.props.filter)
				store.dispatch(action.FilterTodo(this.props.filter))
										
			}}
					
		>
		</a>
	}



}

export default FliterLink