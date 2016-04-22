import React, { Component } from 'react'
import action from '../redux/actions.js'
import store from '../redux/store'
import RaisedButton from 'material-ui/lib/raised-button';
import Radium from 'radium'
import { Link, browserHistory } from 'react-router'
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

  handleconsole(){
 
    store.dispatch(action.con());
  }


  render() {
    return (
      <div>
      <p a={store.getState()}> </p>
        <input
          type="text"

          placeholder="Type in your tode"
     
          ref={(c) => this._input = c}
        />
         <RaisedButton   label="Submit"onClick={()=>this.handleSubmit()} />
       
        <button  style={style.submit} onClick={()=>this.handleconsole()}>console</button>
       
      </div>
    )
  }

}

var style = {
  submit:{
        ':hover': {
              backgroundColor: 'red'
            }
  }
}

export default Radium(TodoInput)



