import React, { Component } from 'react'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo list</h1>
      
     {React.cloneElement(this.props.children, { todos:this.props })}
  
      </div>
    )
  }

}
function  mapStateToProp(state){

	return state
}


export default connect(mapStateToProp)(App)
