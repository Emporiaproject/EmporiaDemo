import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/Login.css';
import $ from "jquery";
// import * as d3 from "d3";
import { FormGroup,Button,ControlLabel,FormControl,HelpBlock,Panel,Glyphicon } from 'react-bootstrap';

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			"username" : "",
			"password" : ""
		};
		
		this.handleChange = this.handleChange.bind(this);
		this.PanelClick = this.PanelClick.bind(this);
		this.JumpPage = this.JumpPage.bind(this);
	}
	componentDidMount() {
		// console.log("componentDidMount")
		$("#mainplanel").width("380px");
		var mainplanel=$("#mainplanel");
		var width = mainplanel.width();
		var height = mainplanel.height()+2;
		mainplanel.animate({width:(width*0.7)+'px'},"slow");
		mainplanel.animate({width:width+'px'},"slow");
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
	getValidationState() {
		const length = this.state.username.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}
	handleChange(e) {
		this.setState({ username: e.target.value });
	}
	PanelClick(e) {
		var mainplanel=$("#mainplanel");
		mainplanel.animate({opacity:'0.5'},"slow");
		mainplanel.animate({opacity:'0.9'},"slow");
	}
	render(){
		return (
			<div className="Login">
				<Panel onClick={this.PanelClick} id="mainplanel">
					<Panel.Body id="mainplanelbody">
						<form>
							<FormGroup
								controlId="username"
								validationState={this.getValidationState()}
								>
							<ControlLabel><Glyphicon glyph="user" />&nbsp;{this.props.UILanguage["Username"]}</ControlLabel>
							<FormControl
								type="text"
								value={this.state.username}
								placeholder="Enter your username"
								onChange={this.handleChange}
								/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
							</FormGroup>
							<FormGroup
								controlId="password"
								validationState={this.getValidationState()}
								>
							<ControlLabel><Glyphicon glyph="lock" />&nbsp;{this.props.UILanguage["Password"]}</ControlLabel>
							<FormControl
								type="password"
								value={this.state.password}
								placeholder="Enter your password"
								onChange={this.handleChange}
								/>
							<FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock>
							</FormGroup>
							
						</form>
					</Panel.Body>
					<Panel.Footer>
						<Button bsStyle="primary" onClick={()=>{this.JumpPage("InCertification")}}>
						{this.props.UILanguage["Login"]}
						</Button>
						<Button bsStyle="info" onClick={()=>{this.JumpPage("Register")}}>
						{this.props.UILanguage["Register"]}
						</Button>
					</Panel.Footer>
				</Panel>
			</div>
		);
	}
}





export default Login;
// example code:
/*

import Login from './ReactLibrary/Login';
<Login />

*/