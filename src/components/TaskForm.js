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

  componentWillMount() {
    if (this.props.task) {
      this.setState({
        id: this.props.task.id,
        name: this.props.task.name,
        status: this.props.task.id,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.task) {
      this.setState({
        id: nextProps.task.id,
        name: nextProps.task.name,
        status: nextProps.task.status,
      });
    } else if (!nextProps.task) {
      this.setState({
        id: "",
        name: "",
        status: false,
      });
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
    let { id } = this.state;
    let btn = id === '' 
              ? <input type="submit" value="Add" /> 
              : <input type="submit" value="Edit" />
    return (
      <form className="app-form" onSubmit={ this.onSubmit }>
        <input
          type="text"
          placeholder="Add todo"
          name="name"
          value={ this.state.name }
          onChange={ this.onChange }
        />
        {btn}
      </form>
    );
  }
}
export default TaskForm;
