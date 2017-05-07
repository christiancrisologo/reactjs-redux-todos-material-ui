import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TextField from 'material-ui/TextField';
 

export default class TodoTextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool
  }

  state = {
    text: this.props.text || ''
  }

  handleSubmit = e => {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.props.onSave(text)
      if (this.props.newTodo) {
        this.setState({ text: '' })
      }
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleBlur = e => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value)
    }
  }
  
  render() {
    return (
      <div style={{margin:'15px',padding:'5px'}}>
        <TextField 
          fullWidth={true}
          inputStyle={{ color: 'red'}}
          hintStyle={{ color: 'red' }}
          placeholder={this.props.placeholder}
          floatingLabelText={this.props.placeholder}
          autoFocus="true"
          multiLine={false}
          value={this.state.text}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onKeyDown={this.handleSubmit} />
      </div>
    )
  }
}
