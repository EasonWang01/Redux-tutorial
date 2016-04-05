import React, { Component } from 'react'
import action from '../redux/actions.js'
import store from '../redux/store'
class TodoList extends Component {

   constructor(props, context) {
    super(props, context)
 
  }





  liClick(a){
   
      store.dispatch(action.toggleTodo(a.id));

  }




  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo)=>{
            return <li 
            key={todo.id} 
            onClick={()=>this.liClick(todo)} 
            style= {{textDecoration:todo.completed?'line-through':'none'}}  
            >
             {todo.text}  

             </li>
          })
        }

      </ul>
    )
  }

}

export default TodoList
