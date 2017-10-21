import React from "react";
import Slider from "material-ui/Slider";
import theme from "./MuiTheme";

class SliderWithCurrency extends React.Component {
  handleChange = (event, value) => {
    this.props.callbackChange(value);
  };
  render() {
    return (
      <div>
        {this.props.heading}
        <span style={theme.palette.incomeStyle}>{this.props.value} zl</span>
        <Slider
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SliderWithCurrency;
