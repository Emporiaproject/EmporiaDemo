import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/Book.css';
import $ from "jquery";
// import * as d3 from "d3";
import { Panel,Button } from 'react-bootstrap';
import sourceballs from '../img/source.gif';

class Book extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.PanelClick = this.PanelClick.bind(this);
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
	PanelClick(e) {
		var mainplanel=$("#mainplanel");
		mainplanel.animate({opacity:'0.5'},"slow");
		mainplanel.animate({opacity:'0.9'},"slow");
	}
	render(){
		return (
			<div onClick={this.PanelClick} id="mainplanel" className="Bookiframe">
				<div id="mainplanelbody">
					<div className="book preserve-3d">
						<div className="book-page-box book-page-4 preserve-3d">
							<div className="book-page page-front">
								<p>
									{this.props.UILanguage["Page 3"]}<br/>
									如何提现代币
								</p>
							</div>
						</div>
						<div className="book-page-box book-page-3 preserve-3d flip-animation-3">
							<div className="book-page page-front">
								<p>
									{this.props.UILanguage["Page 2"]}<br/>
									如何提交商品
								</p>
							</div>
						</div>
						<div className="book-page-box book-page-2 preserve-3d flip-animation-2">
							<div className="book-page page-front">
								<p>
									{this.props.UILanguage["Page 1"]}<br/>
									如何创建合约
								</p>
							</div>
						</div>
						<div className="book-page-box book-page-1 preserve-3d flip-animation-1">
							<div className="book-page page-front">
								<p>
									<img className="booklogo" src={sourceballs}/><br/>
									{this.props.UILanguage["Emporia Help book"]}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}





export default Book;
// example code:
/*

import Book from './ReactLibrary/Book';
<Book />

*/