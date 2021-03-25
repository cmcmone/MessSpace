import React, { Component, Fragment } from "react";
import axios from "axios";

import "./App.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
  }

  handleKeyDown = (e) => {
    const { value } = e.target;
    this.setState({ userInput: value });
    if (e.keyCode === 13) {
      this.getUserUseAxios(value);
    }
  };

  handleSearchButtonClick = (e) => {
    const { userInput } = this.state;
    this.getUserUseAxios(userInput);
  };

  getUserUseAxios(userInput) {
    const url = `https://api.github.com/search/users?q=${userInput}`;
    axios
      .get(url)
      .then((response) => {
        this.props.getUsers(response.data.items);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              onKeyDown={this.handleKeyDown}
              placeholder="enter the name you search"
            />
            &nbsp;<button onClick={this.handleSearchButtonClick}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}

class UserList extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <div className="row">
        <div className="card">
          {users.map((item) => {
            return (
              <Fragment key={item.id}>
                <a href={item.html_url} rel="noreferrer" target="_blank">
                  <img
                    alt={item.login}
                    src={item.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getUsers = (users) => {
    this.setState({ users });
  };

  render() {
    return (
      <div className="container">
        <Search getUsers={this.getUsers} />
        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
