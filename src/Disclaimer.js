import React from "react";
import Snackbar from "material-ui/Snackbar";

export default class Disclaimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleActionTouchTap = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message="Kalkulator ma jedynie charakter poglądowy"
        action="OK"
        onActionTouchTap={this.handleActionTouchTap}
        onRequestClose={this.handleRequestClose}
      />
    );
  }
}
