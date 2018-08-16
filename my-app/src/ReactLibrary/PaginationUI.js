import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/PaginationUI.css';
// import $ from "jquery";
// import * as d3 from "d3";
import { Pagination,Panel } from 'react-bootstrap';

class PaginationUI extends Component{
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
		return (
			<div className="PaginationUI">
				<Pagination>
					<Pagination.First />
					<Pagination.Prev />
					<Pagination.Item>{1}</Pagination.Item>
					<Pagination.Ellipsis />

					<Pagination.Item>{10}</Pagination.Item>
					<Pagination.Item>{11}</Pagination.Item>
					<Pagination.Item active>{12}</Pagination.Item>
					<Pagination.Item>{13}</Pagination.Item>
					<Pagination.Item>{14}</Pagination.Item>

					<Pagination.Ellipsis />
					<Pagination.Item>{20}</Pagination.Item>
					<Pagination.Next />
					<Pagination.Last />
				</Pagination>
			</div>
		);
	}
}





export default PaginationUI;
// example code:
/*

import PaginationUI from './ReactLibrary/PaginationUI';
<PaginationUI />

*/