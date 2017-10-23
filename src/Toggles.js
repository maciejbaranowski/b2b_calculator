import React from "react";
import Toggle from "material-ui/Toggle";

class BaseToggle extends React.Component {
  getLabelText = () => {
    return "Toggle undefined. Should not happen";
  };
  handleChange = (event, value) => {
    this.props.callbackChange(value);
  };
  render() {
    return (
      <Toggle
        label={this.getLabelText()}
        labelPosition="right"
        toggled={this.props.value}
        onToggle={this.handleChange}
      />
    );
  }
}

export class ZusSizeToggle extends BaseToggle {
  getLabelText = () => {
    return "Czy jesteś uprawniony do ulgi na ZUS dla nowych przedsiębiorców";
  };
}

export class ZusSickToggle extends BaseToggle {
  getLabelText = () => {
    return "Czy chcesz opłacać składkę na ubezpieczenie chorobowe?";
  };
}
