import React from "react";
import Chart from "chart.js";
import { green500, red100, red200, red300, red400, red500, red600, red700 } from "material-ui/styles/colors";

class ExpensesGraph extends React.Component {
	componentDidMount = () => {
		let data = {
			datasets: [
				{
					data: [
						this.props.stats.realIncome,
						this.props.stats.incomeTax,
						this.props.stats.zus.health,
						this.props.stats.zus.retirement,
						this.props.stats.zus.pension,
						this.props.stats.zus.sick,
						this.props.stats.zus.accident,
						this.props.stats.zus.workfund
					],
					backgroundColor: [green500, red100, red200, red300, red400, red500, red600, red700]
				}
			],
			labels: [
				"Dochód",
				"Podatek dochodowy",
				"ZUS - Składka zdrowotna",
				"ZUS - Składka emerytalna",
				"ZUS - Składka rentowa",
				"ZUS - Składka chorobowa",
				"ZUS - Składka wypadkowa",
				"ZUS - Fundusz Pracy"
			]
		};
		var myPieChart = new Chart(document.getElementById("myChart"), {
			type: "pie",
			data: data,
			options: {}
		});
	};

	render = () => <canvas id="myChart" width="400" height="800" />;
}

export default ExpensesGraph;
