import React, { Component } from 'react';
import '../ReactStyle/Logistics.css';
import $ from "jquery";
// import * as d3 from "d3";
import { Panel,Table,Button,Row,Col } from 'react-bootstrap';
import Filter from './Filter';

import Highcharts from "highcharts";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';

import FusionCharts from 'fusioncharts';
import ReactFC from 'react-fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import USAMap from 'fusioncharts/maps/fusioncharts.usa';

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

Maps(FusionCharts);
USAMap(FusionCharts);


class Logistics extends Component{
	constructor(props) {
		super(props);
		this.state = {
			"USAchartConfigs":{},
			"CNchartConfigs":{},
		};
		this.JumpPage = this.JumpPage.bind(this);
		this.setmapsize = this.setmapsize.bind(this);
	}
	componentDidMount() {
		// console.log("componentDidMount")
		this.setmapsize()
		Highcharts.chart('thechart', {
			credits:{
				enabled: false // 禁用版权信息
			},
			title: {
				text: 'Logistics brand popularity',
				style:{
					color:"#D0e9ff",
					fontWeight:"bold"
				}
			},
			subtitle: {
				text: 'FedEX,SF,DHL,EMS,UPS'
			},
			chart: {
				type: 'column',
				margin: 75,
				options3d: {
					enabled: true,
					alpha: 15,
					beta: 15,
					depth: 110
				},
				backgroundColor: null
			},
			plotOptions: {
				column: {
					depth: 40,
					stacking: true,
					grouping: false,
					groupZPadding: 10
				}
			},
			series: [{
				data: [1, 2, 4, 3, 2, 4],
				stack: 0
			}, {
				data: [5, 6, 3, 4, 1, 2],
				stack: 0
			}, {
				data: [7, 9, 8, 7, 5, 8],
				stack: 1
			}, {
				data: [13, 4, 2, 8, 5, 8],
				stack: 1
			}, {
				data: [13, 4, 2, 8, 5, 8],
				stack: 1
			}]
		});
		$(".LogisticsElementBody").fadeToggle("slow");
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	JumpPage(inputdata){
		this.props.JumpPage(inputdata);
	}
	setmapsize(){
		this.setState({"USAchartConfigs":{
			type: 'maps/usa',
			width: $(".contropanel").width(),
			height: 400,
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"caption": "usa",
					"subcaption": "Last year",
					"entityFillHoverColor": "#cccccc",
					"numberScaleValue": "1,1000,1000",
					"numberScaleUnit": "K,M,B",
					"numberPrefix": "$",
					"showLabels": "1",
					"theme": "ocean",
					"borderAlpha": "0",
					"borderColor": "#011935",
					"bgColor": "#011935",
				},
				"colorrange": {
					"minvalue": "0",
					"startlabel": "Low",
					"endlabel": "High",
					"code": "#00343f",
					"gradient": "1",
					"color": [
						{
							"maxvalue": "56580",
							"displayvalue": "Average",
							"code": "#37c6c0"
						},
						{
							"maxvalue": "100000",
							"code": "#37c6c0"
						}
					]
				},
				"data": [
					{"id": "HI","value": "3189"},
					{"id": "DC","value": "2879"},
					{"id": "MD","value": "920"},
					{"id": "DE","value": "4607"},
					{"id": "RI","value": "4890"},
					{"id": "WA","value": "34927"},
					{"id": "OR","value": "65798"},
					{"id": "CA","value": "61861"},
					{"id": "AK","value": "58911"},
					{"id": "ID","value": "42662"},
					{"id": "NV","value": "78041"},
					{"id": "AZ","value": "41558"},
					{"id": "MT","value": "62942"},
					{"id": "WY","value": "78834"},
					{"id": "UT","value": "50512"},
					{"id": "CO","value": "73026"},
					{"id": "NM","value": "78865"},
					{"id": "ND","value": "50554"},
					{"id": "SD","value": "35922"},
					{"id": "NE","value": "43736"},
					{"id": "KS","value": "32681"},
					{"id": "OK","value": "79038"},
					{"id": "TX","value": "75425"},
					{"id": "MN","value": "43485"},
					{"id": "IA","value": "46515"},
					{"id": "MO","value": "63715"},
					{"id": "AR","value": "34497"},
					{"id": "LA","value": "70706"},
					{"id": "WI","value": "42382"},
					{"id": "IL","value": "73202"},
					{"id": "KY","value": "79118"},
					{"id": "TN","value": "44657"},
					{"id": "MS","value": "66205"},
					{"id": "AL","value": "75873"},
					{"id": "GA","value": "76895"},
					{"id": "MI","value": "67695"},
					{"id": "IN","value": "33592"},
					{"id": "OH","value": "32960"},
					{"id": "PA","value": "54346"},
					{"id": "NY","value": "42828"},
					{"id": "VT","value": "77411"},
					{"id": "NH","value": "51403"},
					{"id": "ME","value": "64636"},
					{"id": "MA","value": "51767"},
					{"id": "CT","value": "57353"},
					{"id": "NJ","value": "80788"},
					{"id": "WV","value": "95890"},
					{"id": "VA","value": "83140"},
					{"id": "NC","value": "97344"},
					{"id": "SC","value": "88234"},
					{"id": "FL","value": "88234"}
				]
			},
		}});
		console.log($(".contropanel").width());
	}
	render(){
		var that = this;
		this.grid={"xs":6,"md":3}
		this.result = [
			{"text":"EMS","tag":["JP","MiddleEast"]},
			{"text":"FedEX","tag":["JP","USA","Korea"]},
			{"text":"UKExpress","tag":["UK","China","USA","MiddleEast"]},
			{"text":"DHL","tag":["UK","China","USA","MiddleEast","SouthAmerican","Germany"]},
			{"text":"エクスプレス","tag":["UK","China","USA","MiddleEast","SouthAmerican","Germany","Korea"]},
			{"text":"التسليم السريع","tag":["UK","China","USA","MiddleEast","SouthAmerican","Germany"]},
			{"text":"익스프레스","tag":["UK","China","USA","SouthAmerican","Germany","Korea"]}
		];
		const resultlistItems = this.result.map((element, index) =>
			<Col xs={that.grid.xs} md={that.grid.md}
				key={index}
				className={element.tag.join(" ")}>
				<Panel>
					<Panel.Heading onClick={()=>{$(".LogisticsElementBody").slideToggle("slow")}}>
						{element.text}
					</Panel.Heading>
					<Panel.Body className="LogisticsElementBody">
						<p>{element.tag.join(" ")}</p>
					</Panel.Body>
				</Panel>
			</Col>
		);
		return (
			<div className="Logistics">
				<Filter result={this.result} />
				<Row className="show-grid">
					{resultlistItems}
				</Row>
				<Panel className="contropanel">
					<Panel.Body id="thechart"></Panel.Body>
				</Panel>
				<ReactFC id="map" {...this.state.USAchartConfigs} />
			</div>
		);
	}
}





export default Logistics;
// example code:
/*

import Logistics from './ReactLibrary/Logistics';
<Logistics />

*/