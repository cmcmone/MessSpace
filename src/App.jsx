import React, { Component, Fragment } from "react";
import "./App.css";

class AddTodo extends Component {
  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.props.addTodoList(event.target.value);
      event.target.value = "";
    }
  };
  render() {
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="Please enter your task name"
          onKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

class TodoItem extends Component {
  handleChange = (id) => {
    return () => {
      this.props.handleItemChange(id);
    };
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li>
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleChange(id)}
          />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          Delete
        </button>
      </li>
    );
  }
}

class TodoList extends Component {
  handleItemChange = (id) => {
    this.props.handleItemChange(id);
  };

  render() {
    const { todoList } = this.props;
    return (
      <Fragment>
        <ul className="todo-main">
          {todoList.map((element) => {
            const { id } = element;
            return (
              <TodoItem
                key={id}
                {...element}
                handleItemChange={this.handleItemChange}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

class TodoFooter extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>Completed0</span> / All2
        </span>
        <button className="btn btn-danger">Clear All completed tasks</button>
      </div>
    );
  }
}

class App extends Component {
  static id = 4;

  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { id: 3, name: "eating", done: true },
        { id: 2, name: "coding", done: false },
        { id: 1, name: "sleeping", done: true },
      ],
    };
  }

  addTodoList = (name) => {
    const { todoList } = this.state;
    const newTodoList = [{ id: App.id++, name, done: false }, ...todoList];
    this.setState({ todoList: newTodoList });
  };

  handleItemChange = (id) => {
    const { todoList } = this.state;
    const newTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    this.setState({ todoList: newTodoList });
  };

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <AddTodo addTodoList={this.addTodoList} />
          <TodoList
            todoList={this.state.todoList}
            handleItemChange={this.handleItemChange}
          />
          <TodoFooter />
        </div>
      </div>
    );
  }
}

export default App;
