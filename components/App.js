import React, { Component } from 'react'
import TodoInput from './TodoInput.js'
import TodoList from './TodoList.js'
import {connect} from 'react-redux'
import LeftNavUndockedExample from './LeftNavUndockedExample'
class App extends Component {

//檢查路徑是否為根URL，避免沒有children而錯誤
checkIfRouteHasChild(props){
 	if(props.children!=null){
 		return React.cloneElement(props.children, { todos:props})
 	}else{			
 		return
 	}};


render() {


    return (
      <div>
       <LeftNavUndockedExample/>

        {/*檢查url*/(()=>this.checkIfRouteHasChild(this.props))()}
     
      </div>
    )
  }

}
function  mapStateToProp(state){

	return state
}


export default connect(mapStateToProp)(App)
