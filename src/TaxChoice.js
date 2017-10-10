import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardText} from 'material-ui/Card'
import {LINEAR_TAX, PROGRESSIVE_TAX, CONSTANT_TAX} from './Calculator';

const getDescription = (taxChoice) => {
  switch (taxChoice) {
    case LINEAR_TAX:
      return "Będziesz płacił 19% od wartości Twojego dochodu. \
      Pamiętaj, że nie dotyczy Cię kwota wolna od podatku, ani ulgi na dzieci.\
      Nie możesz się też rozliczac wspólnie z małżonkiem";
    case PROGRESSIVE_TAX:
      return "Tzw. zasady ogólne. Obowiązują Cię te same zasady i progi podatkowe,\
      co osoby zatrudnione na umowie o pracę"
    case CONSTANT_TAX:
      return "Będziesz płacił 17% od wartości Twojego przychodu,\
      nie będziesz mógł odliczac żadnych kosztów."
  }
}

const TaxChoice = (props) => (
  <div>
  <SelectField
    floatingLabelText="Sposób rozliczania podatku"
    value={props.value}
    onChange={(event, value) => {props.callbackChange(value)}}>
    <MenuItem value={LINEAR_TAX} primaryText="Podatek liniowy" />
    <MenuItem value={PROGRESSIVE_TAX} primaryText="Podatek progresywny" />
    <MenuItem value={CONSTANT_TAX} primaryText="Podatek ryczałtowy" />
  </SelectField>
  <Card>
    <CardText>{getDescription(props.value)}</CardText>
  </Card>
  </div>
);

export default TaxChoice;
