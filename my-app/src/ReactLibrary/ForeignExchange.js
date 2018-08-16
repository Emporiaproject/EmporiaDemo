import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/ForeignExchange.css';
// import $ from "jquery";
// import * as d3 from "d3";
import { Table,Panel,Row,Col,Glyphicon } from 'react-bootstrap';

import Highstock from './Highstock';

class ForeignExchange extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		// console.log("componentDidMount")
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	render(){
		var that = this;
		// console.log(this.props.ForeignExchange)
		const listItems = this.props.ForeignExchange.map((element, index) =>
			<Col xs={6} md={4} key={index}>
				<Panel>
					<Panel.Heading>{element.title}&nbsp;&nbsp;<Glyphicon glyph="time" />&nbsp;{that.props.Time}</Panel.Heading>
					<Table responsive>
						<thead>
							<tr>
								<th>Before</th>
								<th>Now</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<span className="ForeignExchangeBeforeNow">
										{parseInt(element.before)}
									</span>.{element.before.toString().split('.')[1]}
								</td>
								<td>
									<span className="ForeignExchangeBeforeNow">
									{parseInt(element.v)}
									</span>.{element.v.toString().split('.')[1]}
								</td>
							</tr>
						</tbody>
					</Table>
				</Panel>
			</Col>
		);
		return (
			<div className="ForeignExchange">
				<Panel>
				<Panel.Heading>{this.props.UILanguage["Emp Coin Index"]}</Panel.Heading>
				<Panel.Body><Highstock /></Panel.Body>
				</Panel>
				<Row className="show-grid">
				{listItems}
				</Row>
			</div>
		);
	}
}





export default ForeignExchange;
// example code:
/*

import ForeignExchange from './ReactLibrary/ForeignExchange';
<ForeignExchange />

*/