import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      id: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
      id: state.id + 1,
    }));
  };

  deleteRow = (id, e) => {
    console.log(id, " was deleted!");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>

        <button onClick={(e) => this.deleteRow(this.state.id, e)}>Delete Row</button>
      </div>
    );
  }
}

export default Toggle;
