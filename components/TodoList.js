import React, { Component } from 'react'
import action from '../redux/actions.js'
import store from '../redux/store'
import FilterLink from './FilterLink.js'

class TodoList extends Component {

   constructor(props, context) {
    super(props, context)
 
  }





  liClick(a){
   
      store.dispatch(action.toggleTodo(a.id));

  }




  render() {
   
    var filtered  = function(){
       
      switch(this.props.todos.visbility){

      case "SHOW_ALL":
        return this.props.todos.todos;

      case "SHOW_ACTIVE":
        return (this.props.todos.todos).filter(function(state){
                    return state.completed==false

               });

      case "SHOW_COMPLETED":
        return (this.props.todos.todos).filter(function(state){
                    return state.completed==true

               });
      default:
        return this.props.todos.todos;
      }
    }.bind(this)
   
   
/*
var filtered = (this.props.todos).filter(function(state){
  return state.completed==false

});*/
//console.log(filtered)

    return (
      <div>
      <ul>
        {
          filtered(
            ).map((todo)=>{
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
      <p>
          {"Show: "}

          <FilterLink filter="SHOW_ALL"currentFilter={this.props.todos.visbility}>
         All
          </FilterLink>
          {"  ,  "}
          <FilterLink filter="SHOW_ACTIVE"currentFilter={this.props.todos.visbility}>
         Active
          </FilterLink>
          {"  ,  "}
          <FilterLink filter="SHOW_COMPLETED"currentFilter={this.props.todos.visbility}>
         Completed
          </FilterLink>

      </p>
      </div>
    )
  }

}

export default TodoList
