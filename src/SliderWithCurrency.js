import React from "react";
import Slider from "material-ui/Slider";
import theme from "./MuiTheme";
import { Container, Row, Col } from "react-grid-system";

class SliderWithCurrency extends React.Component {
  handleChange = (event, value) => {
    this.props.callbackChange(value);
  };
  render() {
    return (
      <Container>
        <Row>{this.props.heading}</Row>
        <Row>
          <Col md={2} style={theme.palette.sliderValueStyle}>
            <span style={theme.palette.incomeStyle}>{this.props.value} zł</span>
          </Col>
          <Col md={10}>
            <Slider
              min={this.props.min}
              max={this.props.max}
              step={this.props.step}
              value={this.props.value}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SliderWithCurrency;
