import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Summary from "./Summary";
import Parameters from "./Parameters";
import Disclaimer from "./Disclaimer";
import ExpensesGraph from "./ExpensesGraph";

import { getInitialInput, calculateOutput } from "./Calculator";

import { MuiThemeProvider } from "material-ui/styles";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import muiTheme from "./MuiTheme";

class MasterGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      outputStats: calculateOutput(getInitialInput())
    };
  }
  calculateAndPropagate = input => {
    let newStats = calculateOutput(input);
    this.setState({
      outputStats: newStats
    });
  };

  render = () => (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Parameters callbackChange={this.calculateAndPropagate} />
        </Col>
        <Col md={4}>
          <Summary stats={this.state.outputStats} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <ExpensesGraph stats={this.state.outputStats} />
        </Col>
      </Row>
    </Container>
  );
}
export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div style={muiTheme.palette.containerStyle}>
          <MasterGrid />
          <Disclaimer />
        </div>
      </MuiThemeProvider>
    );
  }
}
