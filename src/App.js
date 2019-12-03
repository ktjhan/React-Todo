import React from 'react';
import Todo from "./components/TodoComponents/Todo"
import data from "./index.js"
import TodoList from "./components/TodoComponents/TodoList"
import "./components/TodoComponents/Todo.css";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

    state = {
        todo: data,
        otherState: "this other state"
      };
      toggleCompleted = id => {
        console.log("toggleCompleted: ", id);
        this.setState({
            todo: this.state.todo.map(item => {
              if (item.id === id) {
                return {
                  ...item,
                  completed: !item.completed
                };
              }
              return item;
            })
          });
        };

        clearCompleted = () => {
          console.log("clearCompleted");
          this.setState({
            todo: this.state.todo.filter(item => {
              return !item.completed;
            })
          });
        };

        addItem = itemName => {
          console.log("add item: ", itemName);

          this.setState({
            todo: [
              ...this.state.todo,
              {
                task: itemName,
                id: Date.now(),
                completed: false
              }
            ]
          });
        };


  render() {
    console.log("rendering...");
        return (
          <div className="App">
            <div className="header">
              <h1>Todo List</h1>
              <TodoList addItem={this.addItem} />
            </div>
            <Todo
              todo={this.state.todo}
              toggleCompleted={this.toggleCompleted}
              clearCompleted={this.clearCompleted}
            />
          </div>
        );
      }
    }

export default App;
