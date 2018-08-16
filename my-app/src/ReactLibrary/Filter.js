import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/Filter.css';
import $ from "jquery";
import { Panel,Row,Col,Button } from 'react-bootstrap';

class Filter extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.tags = []
		for(var j = 0,len=this.props.result.length; j < len; j++) {
			this.tags.push(...this.props.result[j].tag)
		}
		this.tags = [...new Set(this.tags)]
		console.log(this.tags)
	}
	componentDidMount() {
		console.log("componentDidMount")
		this.setFilterFun()
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	setFilterFun(){
		for(var tagscount = 0,len=this.tags.length; tagscount < len; tagscount++) {
			$("#Filtertag"+this.tags[tagscount]).click(function(){
				$("."+this.title).fadeToggle("slow");
			});
		}
	}
	render(){
		var that = this;
		const TagslistItems = this.tags.map((element, index) =>
			<Button key={index} bsStyle="primary" title={element} id={"Filtertag"+element}>{element}</Button>
		);
		return (
			<div className="Filter">
				<Panel>
					<Panel.Body>
					{TagslistItems}
					</Panel.Body>
				</Panel>
			</div>
		);
	}
}





export default Filter;
// example code:
/*

import Filter from './ReactLibrary/Filter';
<Filter />

*/