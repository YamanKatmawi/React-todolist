import React from "react";

function Task(props) {
  const todo = props.todo;
  const index = props.index;
  const completeTask = props.completeTask;
  return (
    <li>
      {todo.text}
      <button
        onClick={() => {
          completeTask(index);
        }}
      >
        Done
      </button>
    </li>
  );
}

export default Task;
