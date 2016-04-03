import React, { Component } from 'react'
import action from '../redux/actions.js'
class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }
  handleSubmit(){
    event.preventDefault()
    //this.props.dispatch()
    this.props.dispatch(action.addTodo(this.state.inputText));
  }




  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type in your tode"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }

}

export default TodoInput
