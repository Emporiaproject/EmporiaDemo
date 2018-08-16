import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/Datapanel.css';
import $ from "jquery";
// import * as d3 from "d3";
import { ListGroup,ListGroupItem,Glyphicon,Panel,NavDropdown,MenuItem,Tab,Row,Col,Nav,NavItem,Button } from 'react-bootstrap';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

class Datapanel extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount() {
		var that = this;
		this.timerID = setInterval(
			() => that.Timetick(),
			3000
		);
		// console.log("componentDidMount")
		this.setState({
			type: 'pie3d',
			width: $(".DatapanelBody").width(),
			height: $(".DatapanelBody").width()*4/6,
			dataFormat: 'json',
			dataSource: {
				"chart": {
					"bgColor": "#011935",
					"baseFontColor": "#D0E9FF",
					"caption": "Contract statistics",
					"subcaption": "2018",
					"startingangle": "120",
					"showlabels": "0",
					"showlegend": "1",
					"enablemultislicing": "0",
					"slicingdistance": "15",
					"showpercentvalues": "1",
					"showpercentintooltip": "0",
					"plottooltext": "Contract statistics : $label Total visit : $datavalue",
					"theme" : "ocean"
				},
				"data": [
					{
						"label": "Jan",
						"value": "420000"
					},
					{
						"label": "Feb",
						"value": "810000"
					},
					{
						"label": "Mar",
						"value": "720000"
					},
					{
						"label": "Apr",
						"value": "550000"
					},
					{
						"label": "May",
						"value": "910000"
					},
					{
						"label": "Jun",
						"value": "510000"
					},
					{
						"label": "Jul",
						"value": "680000"
					},
					{
						"label": "Aug",
						"value": "620000"
					},
					{
						"label": "Sep",
						"value": "610000"
					},
					{
						"label": "Oct",
						"value": "490000"
					},
					{
						"label": "Nov",
						"value": "900000"
					},
					{
						"label": "Dec",
						"value": "730000"
					}
				]
			}
		});
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
		clearInterval(this.timerID);
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	Timetick() {
		var that = this;
		const prevDs = Object.assign({}, this.state.dataSource);
		prevDs.data = [
			{
				"label": "Jan",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Feb",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Mar",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Apr",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "May",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Jun",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Jul",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Aug",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Sep",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Oct",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Nov",
				"value": ""+Math.floor(Math.random()*1000000)
			},
			{
				"label": "Dec",
				"value": ""+Math.floor(Math.random()*1000000)
			}
		];
		this.setState({
			dataSource: prevDs
		});
	}
	onChange(e) {
		this.setState({
			type: e
		});
	}
	render(){
		return (
			<Row className="Datapanel show-grid">
				<Col md={3}>
					<ListGroup>
						<ListGroupItem onClick={()=>{this.onChange("pie3d")}} className="ListGroupItemButton">
							<Glyphicon glyph="chevron-right" />&nbsp;
							{this.props.UILanguage["Contract statistics"]}
						</ListGroupItem>
						<ListGroupItem onClick={()=>{this.onChange("column2d")}} className="ListGroupItemButton">
							<Glyphicon glyph="chevron-right" />&nbsp;
							{this.props.UILanguage["Transaction Data"]}
						</ListGroupItem>
						<ListGroupItem onClick={()=>{this.onChange("bar2d")}} className="ListGroupItemButton">
							<Glyphicon glyph="chevron-right" />&nbsp;
							{this.props.UILanguage["Block growth rate"]}
						</ListGroupItem>
						<ListGroupItem onClick={()=>{this.onChange("line")}} className="ListGroupItemButton">
							<Glyphicon glyph="chevron-right" />&nbsp;
							{this.props.UILanguage["Comprehensive data"]}
						</ListGroupItem>
					</ListGroup>
				</Col>
				<Col md={9}>
					<Panel>
						<Panel.Body className="DatapanelBody">
							<ReactFC {...this.state} />
						</Panel.Body>
					</Panel>
				</Col>
			</Row>
		);
	}
}





export default Datapanel;
// example code:
/*

import Datapanel from './ReactLibrary/Datapanel';
<Datapanel />

*/