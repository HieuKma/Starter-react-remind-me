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
      tasks: [
        { id: 1, name: 'Nguyen', status: false },
        { id: 2, name: 'Minh', status: false }
      ]
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

  onSubmit = (task) => {
    let { tasks } = this.state;
    task.id = this.generateID();
    tasks.push(task);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
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
          <TaskList tasks={ tasks } />
          <TaskControl />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
