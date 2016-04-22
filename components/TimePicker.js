import React from 'react';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import action from '../redux/actions.js'
import store from '../redux/store'
export default class TimePickerExampleComplex extends React.Component {


  handleChangeTimePicker12 = (err, time) => {
    this.refs.picker12hr.setTime(time);
  
    store.dispatch(action.Time(time))
  };

  handleChangeTimePicker24 = (err, time) => {
    this.refs.picker24hr.setTime(time);
 
    store.dispatch(action.Time(time))

  };

  render() {
    console.log(this.props.todos.time)
    return (
      <div>
        <TimePicker
          ref="picker12hr"
          format="ampm"
          hintText="12hr Format"
          onChange={this.handleChangeTimePicker12}
        />
        <TimePicker
          ref="picker24hr"
          format="24hr"
          hintText="24hr Format"
          onChange={this.handleChangeTimePicker24}
        />
      <p style={style.p}>選擇時間為:{""+this.props.todos.time/*由於他會變成object所以要轉為字串*/}</p>
      </div>
    );
  }
}

var style={
  p:{ fontSize:45
   }
}
