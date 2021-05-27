import React, { Component } from "react";

import '../styles/TaskControl.css';

class TaskControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterStatus: -1
    }
  }

  onClick = (e) => {
    this.setState({
      filterStatus: e.target.value
    });
    this.props.onFilter(e.target.value);
  }

  render() {    
    let { tasks, filterStatus } = this.props;
    return (
        <div className="app-control">
            <p>{tasks.length} tasks left</p>
            <ul className="control__list">
              <li 
                value={-1}
                onClick={ this.onClick }
                className= { filterStatus === -1 ? 'control__item control__item--is-active' : 'control__item'}
              >All</li>
              <li
                value={0}
                onClick={ this.onClick }
                className= { filterStatus === 0 ? 'control__item control__item--is-active' : 'control__item'}
              >Doing</li>
              <li
                value={1}
                onClick={ this.onClick }
                className= { filterStatus === 1 ? 'control__item control__item--is-active' : 'control__item'}
              >Done</li>
            </ul>
        </div>
    );
  }
}
export default TaskControl;
