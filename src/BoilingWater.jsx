import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  changeTemperature = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const scale = this.props.scale;
    const temperature = this.props.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in {scale}</legend>
        <input value={temperature} onChange={this.changeTemperature} />
      </fieldset>
    );
  }
}

export default class BoilingWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "",
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({
      temperature,
      scale: "Celsius",
    });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({
      temperature,
      scale: "Fahrenheit",
    });
  };

  render() {
    const { scale, temperature } = this.state;

    const celsius =
      scale === "Fahrenheit"
        ? tryConvert(temperature, toCelsius)
        : temperature;

    const fahrenheit =
      scale === "Celsius" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="Celsius"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="Fahrenheit"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
