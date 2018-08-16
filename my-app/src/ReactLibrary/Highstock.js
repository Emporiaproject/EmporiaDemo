import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../ReactStyle/Highstock.css';
// import $ from "jquery";
// import * as d3 from "d3";
import { Panel,Button } from 'react-bootstrap';

import Highcharts from "highcharts";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

class Highstock extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.indexdata = [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
	}
	outputdataIndex(sand){
		var indexdata = []
		for(var i = 0;i <10;i++){
			indexdata.push((Math.random()*100+Math.pow(-1,sand)*sand))
		}
		return indexdata;
	}
	componentDidMount() {
		// console.log("componentDidMount")
		Highcharts.chart('thechart', {
			title: {
				text: 'EMP Index'
			},
			subtitle: {
				text: 'Data Sources: EMP'
			},
			credits:{
				text:"Emporia",
				href:"http://www.baidu.com/",
				enabled: true,
				style: {
					cursor: 'pointer',
					color: '#000000',
					fontSize: '15px'
				}
			},
			xAxis:{
				title:{
					text:'EMP指数'
				}
			},
			yAxis:{
				labels: {
					formatter:function(){
						if(this.value <=100) { 
							return "低("+this.value+")";
						}else if(this.value >100 && this.value <=200) { 
							return "中("+this.value+")"; 
						}else if(this.value >200 && this.value <=400){ 
							return "高("+this.value+")";
						}else{
							return "超高("+this.value+")";
						}
					}
				}
			},
			chart: {
				events: {
					click: function (event) {
						var label = this.renderer.label(
							'x: ' + Highcharts.numberFormat(event.xAxis[0].value, 2) + ', y: ' + Highcharts.numberFormat(event.yAxis[0].value, 2),
							event.xAxis[0].axis.toPixels(event.xAxis[0].value),
							event.yAxis[0].axis.toPixels(event.yAxis[0].value)
						)
						.attr({
							fill: Highcharts.getOptions().colors[0],
							padding: 10,
							r: 5,
							zIndex: 8
						})
						.css({
							color: '#FFFFFF'
						})
						.add();
						setTimeout(function () {
							label.fadeOut();
						}, 1000);
					}
				}
			},
			series: [{
				name: 'GBP',
				data: this.outputdataIndex(8)
			},{
				name: 'CHF',
				data: this.outputdataIndex(5)
			},{
				name: 'USD',
				data: this.outputdataIndex(17)
			},{
				name: 'RMB',
				data: this.outputdataIndex(80)
			},{
				name: 'JPY',
				data: this.outputdataIndex(80)
			},{
				name: 'EUR',
				data: this.outputdataIndex(1)
			}]
		});
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	render(){
		return (
			<div className="Highstock" id="thechart"></div>
		);
	}
}





export default Highstock;
// example code:
/*

import Highstock from './ReactLibrary/Highstock';
<Highstock />

*/