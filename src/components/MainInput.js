import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'; 
export default class MainInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }


  render() {
    return (

      <Paper zdepth={1}>
 
        <TodoTextInput  
        
          onSave={this.handleSave} 
          placeholder="What needs to be done?" />

      </Paper>
    )
  }
}
