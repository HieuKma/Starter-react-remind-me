import React, { Component } from "react";
import TaskItem from './TaskItem';

import '../styles/TaskList.css';

class TaskList extends Component {

  render() {
    let tasks = this.props.tasks;
    let eleTask = tasks.map((task, index) => {
    return <TaskItem 
                task={task} 
                key={task.id} 
                index={index} 
                onDeleteTask={ this.props.onDeleteTask }
                onChecked={ this.props.onChecked }
                onUpdate={ this.props.onUpdate }
              />;
    });
    
    return (
        <ul className="tasks__list">
          {eleTask}
        </ul>
    );
  }
}
export default TaskList;
