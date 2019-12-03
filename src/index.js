import React from 'react';
import ReactDOM from "react-dom";
import App from "./App"

const data = [
    {
      task: "Tiramisu",
      id: 1,
      completed: false
    },
    {
      task: "Creme Brulee",
      id: 2,
      completed: false
    },
    {
      task: "Eclair",
      id: 3,
      completed: false
    },
    {
      task: "Fondue",
      id: 4,
      completed: false
    },
    {
      task: "Strudel",
      id: 5,
      completed: false
    }
  ];

export default data;


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
