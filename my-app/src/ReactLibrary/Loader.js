import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img from '../img/750d16e015b1fe47276b74209c8a1370.gif';
import '../ReactStyle/Loader.css';
import $ from "jquery";
// import * as d3 from "d3";

class Loader extends Component{
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
			<img src={img} className="Loader loader-logo" alt="logo" />
		);
	}
}





export default Loader;
// example code:
/*

import Loader from './ReactLibrary/Loader';
<Loader />

*/