import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/LogisticsMenu.css';
// import $ from "jquery";
// import * as d3 from "d3";
import { Alert,Button } from 'react-bootstrap';
import SideMenu from './SideMenu';

class LogisticsMenu extends Component{
	constructor(props) {
		super(props);
		this.state = {};
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
		// console.log(inputdata);
		this.props.JumpPage(inputdata);
	}
	render(){
		var that = this;
		return (
			<SideMenu
				eventlist={[
					{page:"Map",Glyphicon:"globe",title:"Map"},
					{page:"FreightCalculator",Glyphicon:"usd",title:"Freight calculator"}
				]}
				UILanguage={that.props.UILanguage}
				JumpPage={that.JumpPage}/>
		);
	}
}





export default LogisticsMenu;
// example code:
/*

import LogisticsMenu from './ReactLibrary/LogisticsMenu';
<LogisticsMenu />

*/