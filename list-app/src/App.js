import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
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

  render() {
    return (
      <div className="App">
        {this.state.todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button
              onClick={() => {
                this.completeTask(index);
              }}
            >
              Done
            </button>
          </li>
        ))}

        <input />
        <button>Add Task</button>
      </div>
    );
  }
}
export default App;
