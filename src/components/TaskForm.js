import React, { Component } from "react";

import '../styles/TaskForm.css';

class TaskForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    }
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.onClearValue();
  }

  onClearValue() {
    this.setState({
      id: '',
      name: '',
      status: false
    })
  }

  render() {
    return (
      <form className="app-form" onSubmit={ this.onSubmit }>
        <input
          type="text"
          placeholder="Add todo"
          name="name"
          value={ this.state.name }
          onChange={ this.onChange }
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
export default TaskForm;
