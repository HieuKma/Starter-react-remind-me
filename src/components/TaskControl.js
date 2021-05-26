import React, { Component } from "react";

import '../styles/TaskControl.css';

class TaskControl extends Component {
  render() {    
    return (
        <div className="app-control">
            <p>tasks left</p>
            <ul className="control__list">
              <li className= "control__item" >
                All
              </li>
              <li className="control__item" >
                Doing
              </li>
              <li className="control__item" >
                Done
              </li>
            </ul>
        </div>
    );
  }
}
export default TaskControl;
