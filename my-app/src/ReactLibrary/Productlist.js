import React, { Component } from 'react';
import '../ReactStyle/Productlist.css';
// import $ from "jquery";
import { Glyphicon,Table,Pagination,Button } from 'react-bootstrap';
import PaginationUI from './PaginationUI';
import Filter from './Filter';

class Productlist extends Component{
	constructor(props) {
		super(props);
		this.JumpPage = this.JumpPage.bind(this);
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
	JumpPage(inputdata){
		console.log(inputdata);
		this.props.JumpPage(inputdata);
	}
	render(){
		this.result=[
			{title:"处理器",sku:"K2586258423","tag":["IC"]},
			{title:"牙刷",sku:"K2586258423","tag":["necessities"]},
			{title:"塑胶花",sku:"K2586258423","tag":["PlasticFlower"]},
			{title:"牙刷",sku:"K2586258423","tag":["necessities"]},
			{title:"电池",sku:"K2586258423","tag":["battery"]},
			{title:"牙刷",sku:"K2586258423","tag":["necessities"]},
			{title:"塑胶花",sku:"K2586258423","tag":["PlasticFlower"]},
			{title:"射频芯片",sku:"K2586258423","tag":["IC"]},
			{title:"toothpaste",sku:"K2586258423","tag":["necessities"]},
			{title:"铁矿石",sku:"K2586258423","tag":["Iron"]},
			{title:"箱包",sku:"K2586258423","tag":["bag"]}
		]
		const listItems = this.result.map((element, index) =>
			<tr key={index} className={element.tag.join(" ")}>
				<td className="ProductlistCheckbox"><input type="checkbox"/></td>
				<td>{element.title}</td>
				<td>{element.sku}</td>
				<td>{element.tag.join(",")}</td>
				<td>
					<Button bsStyle="success" bsSize="xsmall" onClick={()=>{this.JumpPage("newproduct")}}><Glyphicon glyph="pencil" /></Button>&nbsp;
					<Button bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button>
				</td>
			</tr>
		);

		var that = this;
		return (
			<div className="Productlist">
				<Filter result={this.result} />
				<Table striped bordered condensed hover>
					<thead>
						<tr>
						<th className="ProductlistHead ProductlistID"><Glyphicon glyph="tags" />&nbsp;ID</th>
						<th className="ProductlistHead ProductlistTitle"><Glyphicon glyph="bookmark" />&nbsp;{that.props.UILanguage["Title"]}</th>
						<th className="ProductlistHead"><Glyphicon glyph="barcode" />&nbsp;{that.props.UILanguage["SKU"]}</th>
						<th className="ProductlistHead"><Glyphicon glyph="tags" />&nbsp;{that.props.UILanguage["Category"]}</th>
						<th className="ProductlistHead ProductlistOperate"><Glyphicon glyph="wrench" />&nbsp;{that.props.UILanguage["operate"]}</th>
						</tr>
					</thead>
					<tbody>
						{listItems}
					</tbody>
				</Table>
				
				<PaginationUI />
			</div>
		);
	}
}





export default Productlist;
// example code:
/*

import Productlist from './ReactLibrary/Productlist';
<Productlist />

*/