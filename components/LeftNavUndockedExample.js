import React from 'react';
import { Link, browserHistory } from 'react-router'
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import injectTapEventPlugin from 'react-tap-event-plugin';
export default class LeftNavUndockedExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    injectTapEventPlugin();
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () =>{
   this.setState({open: false})
   console.log(123)
 };

  render() {

    return (
      <div>
        <RaisedButton
          label="Open LeftNav"
          onTouchTap={this.handleToggle}
        />
        <LeftNav
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({open})}
        >
          <MenuItem  onTouchTap={this.handleClose}><Link style={style.link} to="/as">TodoList</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link style={style.link} to="/aas">Input</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link style={style.link} to="/gridpic">Picture</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link style={style.link} to="/timepicker">TimePicker</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link style={style.link} to="/readmongo">ReadMongo</Link></MenuItem>
        </LeftNav>
      </div>
    );
  }

}

  var style = {
  link:{
        flex: 1,
         textDecoration:"none",
         fontSize:25,
        ':hover': {
              background: 'red'
            }
  }
}