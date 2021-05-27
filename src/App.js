import React, { Component } from "react";
import './styles/App.css';
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskControl from "./components/TaskControl";
import Footer from "./components/Footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  componentWillMount() {
    if(localStorage.getItem('tasks')) {
      let tasks = JSON.parse(localStorage.getItem('tasks'))
      this.setState({
        tasks: tasks
      })
    }
  }

  /** Set ID */
  s4() {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  /** Set locostogare */
  setLocal(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**Add task */
  onSubmit = (task) => {
    let { tasks } = this.state;
    task.id = this.generateID();
    tasks.push(task);
    this.setState({
      tasks: tasks
    });
    this.setLocal(tasks)
    // localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**Delete task */
  onDeleteTask = (id) => {
    let { tasks } = this.state;
    const index = this.findID(id);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
    this.setLocal(tasks);
  }

  /** Tìm index theo ID */
  findID(id) {
    let { tasks } = this.state;
    return tasks.findIndex(task => task.id === id);
  }

  /** Check completed */
  onChecked = (id) => {
    let { tasks } = this.state;
    const index = this.findID(id);
    tasks[index].status = !tasks[index].status;
    this.setState({
      tasks: tasks
    });
    this.setLocal(tasks);
  }

  render() {

    let { tasks } = this.state;

    return (
      <div className="app-container">
        <Header />

        <div className="app__content">
          <TaskForm
            onSubmit={ this.onSubmit }
          />
          <TaskList
            tasks={ tasks } 
            onDeleteTask={ this.onDeleteTask }
            onChecked={ this.onChecked }
          />
          <TaskControl />
        </div>

        <Footer />
      </div>
    );
  }
}
export default App;
