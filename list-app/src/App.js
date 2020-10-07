import React, { Component } from "react";
import Task from "./components/Task";
import CreateTask from "./components/CreateTask";
import "./App.css";

class App extends Component {
  state = {
    newTask: "",
    todos: [
      { text: "learn reactJS" },
      { text: "learn NodeJS" },
      { text: "learn vueJS" },
      { text: "learn AngularJS" },
    ],
  };

  completeTask = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos,
    });
  };

  updateNewTask = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask,
    });
    this.setState({
      todos,
      newTask: "",
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.todos.map((todo, index) => (
          <Task
            todo={todo}
            index={index}
            completeTask={this.completeTask}
            key={index}
          />
        ))}

        <CreateTask
          value={this.state.newTask}
          onChange={this.updateNewTask}
          addTask={this.addTask}
        />
      </div>
    );
  }
}
export default App;
