import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
import { Card, CardText, CardTitle } from "material-ui/Card";

import { getInitialInput } from "./Calculator";
import SliderWithCurrency from "./SliderWithCurrency";
import { ZusSizeToggle, ZusSickToggle } from "./Toggles";
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

  setZusSickChoice = value => {
    this.setSpecificInputAndPropagate("zusSickChoice", value);
  };

  setCosts = value => {
    this.setSpecificInputAndPropagate("costs", value);
  };

  getDescription = () => {
    return "Za pomocą tego narzędzia policzysz swój dochód przy umowie w ramach B2B.\
      Wypełnij pola poniżej zgodnie z opisem.";
  };

  render = () => (
    <Card>
      <CardTitle title="Kalkulator B2B" subtitle={this.getDescription()} />
      <List>
        <ListItem>
          <SliderWithCurrency
            heading="Kwota netto na fakturze (bez VAT): "
            min={2000}
            max={50000}
            step={100}
            value={this.state.netInvoice}
            callbackChange={this.setNetInvoice}
          />
        </ListItem>
        <ListItem>
          <ZusSizeToggle callbackChange={this.setZusSmallSize} value={this.state.zusSmallSize} />
          <ZusSickToggle callbackChange={this.setZusSickChoice} value={this.state.zusSickChoice} />
        </ListItem>
        <ListItem>
          <TaxChoice callbackChange={this.setTaxChoice} value={this.state.taxChoice} />
        </ListItem>
        <ListItem>
          <SliderWithCurrency
            heading="Na ile estymujesz miesięczne koszty swojej działalności?
            (oprogramowanie, sprzęt, transport, amortyzacja samochodu służbowego): "
            min={0}
            max={this.state.netInvoice}
            step={100}
            value={this.state.costs}
            callbackChange={this.setCosts}
          />
        </ListItem>
      </List>
    </Card>
  );
}

export default Parameters;
