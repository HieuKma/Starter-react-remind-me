import React, { Component } from "react";
import '../styles/TaskItem.css';
class TaskItem extends Component {
  onClick = () => {
    const id = this.props.task.id;
    this.props.onDeleteTask(id);
  }

  onChecked = () => {
    const id = this.props.task.id;
    this.props.onChecked(id);
  }

  render() {
    let { task } = this.props;
    return (
        <li className="task__item">
          <div className="task__item-checked">
            <input type="checkbox" id={ task.id } onClick={ this.onChecked } />
            <label htmlFor={ task.id } className={ task.status ? 'task-form--checked' : ''}></label>
          </div>
          <p className={ task.status ? 'task__name task--is-completed' : 'task__name'}>{ task.name }</p>
          <div className="task__icon">
            <i className="fas fa-edit"></i>
            <i className="far fa-trash-alt"
               onClick={ this.onClick }
            ></i>
          </div>
        </li>
    );
  }
}
export default TaskItem;
