import React, { Component } from 'react'
import action from '../redux/actions.js'
import store from '../redux/store'
class TodoInput extends Component {

  constructor(props, context) {
    super(props, context)
 
  }


 
  handleSubmit(){
    event.preventDefault()
    //this.props.dispatch()
    console.log(this._input.value);
    store.dispatch(action.addTodo(this._input.value));
  }




  render() {
    return (
      <div>
        <input
          type="text"

          placeholder="Type in your tode"
     
          ref={(c) => this._input = c}
        />
        <button onClick={()=>this.handleSubmit()}>Submit</button>
      </div>
    )
  }

}

export default TodoInput
