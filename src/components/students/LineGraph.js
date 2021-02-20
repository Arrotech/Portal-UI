import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react.js'
import '../../assets/css/students/LineGraph.css'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class LineGraph extends Component {
    render() {
        const options = {
            backgroundColor: "#12232E",
            animationEnabled: true,
            width: 440,
            height: 250,
            title: {
                text: "semester 1 vs semester 2",
                fontColor: "#EEFBFB",
                fontSize: 14,
                fontWeight: "bold",
            },
            axisY: {
                title: "average points",
                titleFontColor: "#6D78AD",
				lineColor: "#203647",
                labelFontColor: "#EEFBFB",
                titleFontColor: "#EEFBFB",
                titleFontSize: 11,
                labelFontSize: 8,
            },
            axisX: {
                title: "year",
                titleFontColor: "#6D78AD",
				lineColor: "#203647",
                labelFontColor: "#EEFBFB",
                titleFontColor: "#EEFBFB",
                titleFontSize: 11,
                labelFontSize: 8,
            },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "semester 1",
                fontColor: "#EEFBFB",
                color: "#4DA8DA",
                showInLegend: true,
                dataPoints: [
                    { y: 77, label: "2014/2015" },
                    { y: 63, label: "2015/2016" },
                    { y: 69, label: "2016/2017" },
                    { y: 73, label: "2017/2018" },
                    { y: 69, label: "2018/2019" },
                    { y: 69, label: "2019/2020" },
                    { y: 69, label: "2020/2021" },
                ]
            },
            {
                type: "spline",
                name: "semester 2",
                showInLegend: true,
                color: "yellow",
                labelFontColor: "#EEFBFB",
                dataPoints: [
                    { y: 71, label: "2014/2015" },
                    { y: 68, label: "2015/2016" },
                    { y: 69, label: "2016/2017" },
                    { y: 71, label: "2017/2018" },
                    { y: 69, label: "2018/2019" },
                    { y: 69, label: "2019/2020" },
                    { y: 68, label: "2020/2021" },
                ]
            }]
        }

        return (
            <div className="lineGraph">
                <CanvasJSChart options={options}/>
            </div>
        );
    }
}
