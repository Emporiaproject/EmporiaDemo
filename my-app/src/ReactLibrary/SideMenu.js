import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/SideMenu.css';
// import $ from "jquery";
import { ListGroup,ListGroupItem,Glyphicon } from 'react-bootstrap';

class SideMenu extends Component{
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
		console.log(inputdata);
		this.props.JumpPage(inputdata);
	}
	render(){
		var that = this;
		const listItems = that.props.eventlist.map((element, index) =>
			<ListGroupItem key={index}
				onClick={()=>{that.JumpPage(element.page)}}
				className="ListGroupItemButton">
				<Glyphicon glyph={element.Glyphicon} />&nbsp;
				{that.props.UILanguage[element.title]}
			</ListGroupItem>
		);
		return (
			<div className="SideMenu">
				<ListGroup>
					{listItems}
				</ListGroup>
			</div>
		);
	}
}





export default SideMenu;
// example code:
/*

import SideMenu from './ReactLibrary/SideMenu';
<SideMenu />

*/