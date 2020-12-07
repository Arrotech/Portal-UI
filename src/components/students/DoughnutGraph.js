import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react.js'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class DoughnutGraph extends Component {
	render() {
		const options = {
            animationEnabled: true,
            width: 450,
            height: 150,
            backgroundColor: "#12232E",
            fontSize: 11,
			title: {
                text: "",
                fontColor: "#EEFBFB",
                fontSize: 14,
			},
			subtitles: [{
				text: "71% Positive",
				verticalAlign: "center",
                fontSize: 8,
                fontColor: "yellow",
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
                indexLabel: "{name}: {y}",
                indexLabelFontColor: "#EEFBFB",
                indexLabelFontSize: 10,
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "1st Year", y: 77 },
					{ name: "2nd Year", y: 68 },
					{ name: "3rd Year", y: 63 },
					{ name: "4th Year", y: 72 },
                    { name: "5th Year", y: 71 },
                    { name: "6th Year", y: 70 },
                    { name: "7th Year", y: 62 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}