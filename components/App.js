import React, { Component } from 'react'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import {connect} from 'react-redux'

class App extends Component {

  render() {
  	
console.log(this.props)
    return (
      <div>
        <h1>Tsd list</h1>
        {this.props.children}
      </div>
    )
  }

}
function  mapStateToProp(state){

	return state
}


export default connect(mapStateToProp)(App)
