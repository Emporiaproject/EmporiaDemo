import React, { Component } from 'react';
import '../ReactStyle/TransactionMenu.css';
// import $ from "jquery";
import { ListGroup,ListGroupItem,Glyphicon } from 'react-bootstrap';
import SideMenu from './SideMenu';

class TransactionMenu extends Component{
	constructor(props) {
		super(props);
		// this.state = {};
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
		var that = this;
		return (
			<SideMenu
				eventlist={[
					{page:"newproduct",Glyphicon:"plus-sign",title:"Create new product template"},
					{page:"productlist",Glyphicon:"th-list",title:"product list"},
					{page:"Newcontract",Glyphicon:"file",title:"Initiating contract"},
					{page:"InCertification",Glyphicon:"hourglass",title:"Order in network authentication"},
					{page:"SuccessfullyCertification",Glyphicon:"check",title:"Successfully certified contract"},
				]}
				UILanguage={that.props.UILanguage}
				JumpPage={that.JumpPage}/>
		);
	}
}





export default TransactionMenu;
// example code:
/*

import TransactionMenu from './ReactLibrary/TransactionMenu';
<TransactionMenu />

*/