import React, { Component } from 'react'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import {connect} from 'react-redux'
class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
      </div>
    )
  }

}
function  mapStateToProps(state){

	return state
}


export default connect(mapStateToProps)(App)
