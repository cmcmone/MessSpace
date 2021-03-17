import React from "react";

class BtnEvent extends React.Component {
  render() {
    return (
      <div>
        <button onClick={activateLasers}>Click Me</button>
        <a href="#" onClick={handleClick}>Click me</a>
      </div>
    );
  }
}

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

function activateLasers(e) {
  e.preventDefault();
  console.log("button was clicked");
}

export default BtnEvent;
