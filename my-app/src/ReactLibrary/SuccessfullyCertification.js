import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/SuccessfullyCertification.css';
// import $ from "jquery";
// import * as d3 from "d3";
import { Table,Panel,Button } from 'react-bootstrap';
import PaginationUI from './PaginationUI';

class SuccessfullyCertification extends Component{
	constructor(props) {
		super(props);
		this.state = {};
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
		const list = [
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201708",Complete:"201712",tag:""},
			{hash:"K2586258423",start:"201703",Complete:"201803",tag:""}
		].map((element, index) =>
			<tr key={index}>
				<td>{element.hash}</td>
				<td>{element.start}</td>
				<td>{element.Complete}</td>
			</tr>
		);
		return (
			<div className="SuccessfullyCertification">
				<Panel>
					<Panel.Body>
						<Button bsStyle="primary">2017</Button>
						<Button bsStyle="primary">2018</Button>
					</Panel.Body>
				</Panel>
				<Table striped bordered condensed hover>
					<thead>
					<tr>
						<th>hash</th>
						<th>start time</th>
						<th>Complete time</th>
					</tr>
					</thead>
					<tbody>
					{list}
					</tbody>
				</Table>

				<PaginationUI />
			</div>
		);
	}
}





export default SuccessfullyCertification;
// example code:
/*

import SuccessfullyCertification from './ReactLibrary/SuccessfullyCertification';
<SuccessfullyCertification />

*/