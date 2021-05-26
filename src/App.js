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
        { id: 2, name: 'Minh', status: false },
        { id: 3, name: 'Hieu', status: false },
        { id: 4, name: 'Nguyen', status: false },
        { id: 5, name: 'Minh', status: false },
        { id: 6, name: 'Hieu', status: false }
      ]
    }
  }

  render() {
    let { tasks } = this.state;
    return (
      <div className="app-container">
        <Header />
        <div className="app__content">
          <TaskForm />
          <TaskList tasks={ tasks} />
          <TaskControl />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
