import React, { Component } from "react";
import "./App.css";

class UserList extends Component {
  render() {
    return (
      <div className="row">
        <div className="card">
          <a href="https://github.com/reactjs" rel="noreferrer" target="_blank">
            <img
              alt="github"
              src="https://avatars.githubusercontent.com/u/6412038?v=3"
              style={{ width: "100px" }}
            />
          </a>
          <p className="card-text">reactjs</p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input type="text" placeholder="enter the name you search" />
            &nbsp;<button>Search</button>
          </div>
        </section>
        <UserList />
      </div>
    );
  }
}

export default App;
