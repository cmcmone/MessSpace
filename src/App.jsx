import React, { Component } from "react";
import Example from './Example';
import ExampleWithManyStates from './ExampleWithManyStates';

import "./App.css";
class App extends Component {
  render() {
    return <Example />
    // return <ExampleWithManyStates />;
  }
}

export default App;