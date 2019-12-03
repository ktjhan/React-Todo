import React from "react";
import TodoForm from "./TodoForm";

const Todo = props => {
    return (
        <div className="todo-list">
          {props.todo.map(item => (
            <TodoForm
              key={item.id}
              item={item}
              toggleCompleted={props.toggleCompleted}
            />
          ))}
          <button className="clear-btn" onClick={props.clearCompleted}>
            Clear Completed
          </button>
        </div>
      );
    };

    export default Todo;
