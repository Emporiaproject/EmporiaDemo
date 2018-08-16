import React, { Component } from 'react';
// import '../ReactStyle/FieldGroup.css';
// import $ from "jquery";
import { FormGroup,ControlLabel,FormControl,HelpBlock } from 'react-bootstrap';

class FieldGroup extends Component{
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
		return (
			<FormGroup className="FieldGroup" controlId={this.props.id}>
				<ControlLabel>{this.props.label}</ControlLabel>
				<FormControl {...this.props} />
				{this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
			</FormGroup>
		);
	}
}





export default FieldGroup;
// example code:
/*

import FieldGroup from './ReactLibrary/FieldGroup';
<FieldGroup />

*/