import React, { Component } from "react";
import '../styles/TaskItem.css';
class TaskItem extends Component {

  render() {
    let { task } = this.props;
    console.log(task);
    return (
        <li className="task__item">
          <div className="task__item-checked">
            <input type="checkbox" />
            <label htmlFor=""></label>
          </div>
          <p className="task__name">{ task.name }</p>
          <div className="task__icon">
            <i className="fas fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </li>
    );
  }
}
export default TaskItem;
