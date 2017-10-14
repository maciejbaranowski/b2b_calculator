import React from "react";
import { List, ListItem } from "material-ui/List";
import { Card, CardTitle } from "material-ui/Card";

const Summary = props => (
  <Card>
    <CardTitle title="Wynik" subtitle="Podsumowanie tego na co idą zarobione przez Ciebie pieniądze" />
    <List>
      <ListItem>
        Twoja realna płaca: <span className="income">{props.stats.realIncome} zł</span>
      </ListItem>
      <ListItem>
        Podatek dochodowy: <span className="expense">{props.stats.incomeTax} zł</span>
      </ListItem>
      <ListItem>
        Składka zus: <span className="expense">{props.stats.zus} zł</span>
      </ListItem>
    </List>
  </Card>
);

export default Summary;
