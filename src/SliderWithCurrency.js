import React from "react";
import Slider from "material-ui/Slider";

class SliderWithCurrency extends React.Component {
  handleChange = (event, value) => {
    this.props.callbackChange(value);
  };
  render() {
    return (
      <div>
        {this.props.heading} <span className="income">{this.props.value} zł</span>
        <Slider min={2000} max={50000} step={100} value={this.props.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default SliderWithCurrency;
