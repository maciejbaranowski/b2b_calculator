import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import { Card, CardText } from "material-ui/Card";

import { getInitialInput } from "./Calculator";
import SliderWithCurrency from "./SliderWithCurrency";
import { ZusSizeToggle, ZusHealthToggle } from "./Toggles";
import TaxChoice from "./TaxChoice";

class Parameters extends React.Component {
  constructor() {
    super();
    this.state = getInitialInput();
  }

  setSpecificInputAndPropagate = (key, value) => {
    let stateUpdate = {};
    stateUpdate[key] = value;
    this.setState(stateUpdate, () => {
      this.props.callbackChange(this.state);
      console.log(this.state);
    });
  };

  setZusSmallSize = value => {
    this.setSpecificInputAndPropagate("zusSmallSize", value);
  };

  setNetInvoice = value => {
    this.setSpecificInputAndPropagate("netInvoice", value);
  };

  setTaxChoice = value => {
    this.setSpecificInputAndPropagate("taxChoice", value);
  };

  setZusHealth = value => {
    this.setSpecificInputAndPropagate("zusHealth", value);
  };

  render = () => (
    <Card>
      <List>
        <ListItem>
          <SliderWithCurrency
            heading="Kwota netto na fakturze (bez VAT): "
            value={this.state.netInvoice}
            callbackChange={this.setNetInvoice}
          />
        </ListItem>
        <ListItem>
          <ZusSizeToggle callbackChange={this.setZusSmallSize} value={this.state.zusSmallSize} />
          <ZusHealthToggle callbackChange={this.setZusHealth} value={this.state.zusHealth} />
        </ListItem>
        <ListItem>
          <TaxChoice callbackChange={this.setTaxChoice} value={this.state.taxChoice} />
        </ListItem>
      </List>
    </Card>
  );
}

export default Parameters;
