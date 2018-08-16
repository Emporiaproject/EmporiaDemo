import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import '../ReactStyle/Warnpanel.css';
// import $ from "jquery";
// import { Alert,Button } from 'react-bootstrap';

class Warnpanel extends Component{
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
			<div className="Warnpanel"></div>
		);
	}
}





export default Warnpanel;
// example code:
/*

import Warnpanel from './ReactLibrary/Warnpanel';
<Warnpanel />

*/