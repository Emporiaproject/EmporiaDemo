import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/Register.css';
// import $ from "jquery";
// import * as d3 from "d3";
import {
	Glyphicon,Image,Table,Panel,Button,
	FormGroup,ControlLabel,FormControl,
	ListGroup,ListGroupItem } from 'react-bootstrap';
import FieldGroup from './FieldGroup';

class Register extends Component{
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
		return (
			<div className="Register">
				<Panel bsStyle="info">
					<Panel.Heading>
						<Panel.Title componentClass="h3" className="NewproductFormTitle">
						{that.props.UILanguage["Fill registration information"]}</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						<form>
							<FieldGroup
								id="formControlsText"
								type="text"
								label={that.props.UILanguage["Username"]}
								placeholder={that.props.UILanguage["Username"]}
								/>
							<FieldGroup
								id="formControlsEmail"
								type="email"
								label={that.props.UILanguage["Email"]}
								placeholder={that.props.UILanguage["Email"]}
								/>

							<Button type="submit" onClick={()=>{this.JumpPage("Mywallet")}} className="BorderRadiusZero">
								{that.props.UILanguage["Submit"]}
							</Button>
						</form>
					</Panel.Body>
				</Panel>
			</div>
		);
	}
}





export default Register;
// example code:
/*

import Register from './ReactLibrary/Register';
<Register />

*/