import React from "react";
import { List, ListItem } from "material-ui/List";
import { Card, CardTitle } from "material-ui/Card";
import theme from "./MuiTheme";
import ExpensesGraph from "./ExpensesGraph";

const SummaryItem = props => (
  <ListItem>
    {props.label}: <span style={props.style}>{props.value} zł</span>
  </ListItem>
);

const Summary = props => (
  <Card>
    <CardTitle title="Wynik" subtitle="Podsumowanie tego na co idą zarobione przez Ciebie pieniądze" />
    <List>
      <SummaryItem label="Twoja realna płaca" style={theme.palette.incomeStyle} value={props.stats.realIncome} />
      <SummaryItem label="Podatek dochodowy" style={theme.palette.expenseStyle} value={props.stats.incomeTax} />
      <SummaryItem label="Suma składek zus" style={theme.palette.expenseStyle} value={props.stats.zusSum} />
      <ListItem>
        <List>
          Składniki ZUS:
          <SummaryItem label="Składka zdrowotna" style={theme.palette.expenseStyle} value={props.stats.zus.health} />
          <SummaryItem
            label="Składka emerytalna"
            style={theme.palette.expenseStyle}
            value={props.stats.zus.retirement}
          />
          <SummaryItem label="Składka rentowa" style={theme.palette.expenseStyle} value={props.stats.zus.pension} />
          <SummaryItem label="Składka chorobowa" style={theme.palette.expenseStyle} value={props.stats.zus.sick} />
          <SummaryItem label="Składka wypadkowa" style={theme.palette.expenseStyle} value={props.stats.zus.accident} />
          <SummaryItem label="Fundusz Pracy" style={theme.palette.expenseStyle} value={props.stats.zus.workFund} />
        </List>
      </ListItem>
      <ListItem>
        <ExpensesGraph stats={props.stats} />
      </ListItem>
    </List>
  </Card>
);

export default Summary;
