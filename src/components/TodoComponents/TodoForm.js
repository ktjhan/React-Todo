import React from "react";

const TodoForm = props => {
  let className = "item";
  if (props.item.completed) {
    className = className + " Completed";
  }

  const handleClick = () => {
    props.toggleCompleted(props.item.id);
  };

  return (
    <div onClick={handleClick} className={className}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default TodoForm;
