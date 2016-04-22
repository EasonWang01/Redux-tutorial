import React, { Component } from 'react'
import action from '../redux/actions.js'
import store from '../redux/store'
class ReadMongo extends Component {

	sendSave=()=>{
		console.log(this.refs.myInput.value)
	}



	render(){
		return  <div>
				<input ref="myInput" />
				<button onClick={this.sendSave}>確定</button>
				</div>
	}
}


export default ReadMongo