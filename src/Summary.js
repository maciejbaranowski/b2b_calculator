import React from "react";
import { List, ListItem } from "material-ui/List";
import { Card, CardTitle } from "material-ui/Card";

const SummaryItem = props => (
  <ListItem>
    {props.label}: <span className={props.class}>{props.value} zł</span>
  </ListItem>
);

const Summary = props => (
  <Card>
    <CardTitle title="Wynik" subtitle="Podsumowanie tego na co idą zarobione przez Ciebie pieniądze" />
    <List>
      <SummaryItem label="Twoja realna płaca" class="income" value={props.stats.realIncome} />
      <SummaryItem label="Podatek dochodowy" class="expense" value={props.stats.incomeTax} />
      <SummaryItem label="Suma składek zus" class="expense" value={props.stats.zusSum} />
      <ListItem>
        <List>
          Składniki ZUS:
          <SummaryItem label="Składka zdrowotna" class="expense" value={props.stats.zus.health} />
          <SummaryItem label="Składka emerytalna" class="expense" value={props.stats.zus.retirement} />
          <SummaryItem label="Składka rentowa" class="expense" value={props.stats.zus.pension} />
          <SummaryItem label="Składka chorobowa" class="expense" value={props.stats.zus.sick} />
          <SummaryItem label="Składka wypadkowa" class="expense" value={props.stats.zus.accident} />
          <SummaryItem label="Fundusz Pracy" class="expense" value={props.stats.zus.workFund} />
        </List>
      </ListItem>
    </List>
  </Card>
);

export default Summary;
