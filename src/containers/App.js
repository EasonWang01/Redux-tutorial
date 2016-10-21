import React, { Component } from 'react'
import TodoList from './TodoList.js'
import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        {this.props.children}
      </div>
    )
  }

}
function  mapStateToProp(state){

	return state
}


export default connect(mapStateToProp)(App)
