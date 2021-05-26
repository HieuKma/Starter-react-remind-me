import React, { Component } from "react";

import '../styles/TaskForm.css';

class TaskForm extends Component {

  render() {
    return (
      <form className="app-form">
        <input
          type="text"
          placeholder="Add todo"
          name="name"
        />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
export default TaskForm;
