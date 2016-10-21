import React, { Component } from 'react'
import {connect} from 'react-redux'
import actions from '../redux/actions/todoActions.js'
import { bindActionCreators } from 'redux'
import List from '../components/List.js'

class TodoList extends Component {
  send = () => {
    let text = this.inputFiled.value;
    this.props.addTodo1(text);
  }
  itemClick = (id) => {
    console.log(id)
  }
  render() {
    return (
      <div>
        <input ref={(c) => this.inputFiled = c} />
        <button onClick={()=>this.send()}></button>
        <List list={this.props} itemClick={(id)=>this.itemClick(id)}>
        </List>
      </div>
    )
  }

}
function mapStateToProp(state){
	return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo1:actions.addTodo
  },dispatch);
}

export default connect(mapStateToProp,mapDispatchToProps)(TodoList)
