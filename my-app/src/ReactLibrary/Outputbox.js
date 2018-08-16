import React, { Component } from 'react';
// import '../ReactStyle/Outputbox.css';
// import $ from "jquery";
import { Row,Col,ListGroup,ListGroupItem,Panel } from 'react-bootstrap';
import TransactionMenu from './TransactionMenu';
import Productlist from './Productlist';
import NewproductForm from './NewproductForm';
import Newcontract from './Newcontract';
import InCertification from './InCertification';
import Logistics from './Logistics';
import ForeignExchange from './ForeignExchange';
import Mywallet from './Mywallet';
import SuccessfullyCertification from './SuccessfullyCertification';
import Login from './Login';
import Register from './Register';
import Datapanel from './Datapanel';
import Book from './Book';
import LogisticsMenu from './LogisticsMenu';

class Outputbox extends Component{
	constructor(props) {
		super(props);
		this.JumpPage = this.JumpPage.bind(this);
	}
	componentDidMount() {
		// console.log("componentDidMount")
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
	}
	JumpPage(inputdata){
		// console.log(inputdata);
		this.props.JumpPage(inputdata);
	}
	render(){
		var that = this;
		switch(that.props.page){
			case "Login":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={12}>
								<Login UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "Register":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={12}>
								<Register UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "productlist":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3} className="LeftMenu">
								<TransactionMenu UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
							<Col md={9}>
								<Productlist UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "newproduct":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3} className="LeftMenu">
								<TransactionMenu UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
							<Col md={9}>
								<NewproductForm UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "Newcontract":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3} className="LeftMenu">
								<TransactionMenu UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
							<Col md={9}>
								<Newcontract UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "InCertification":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3} className="LeftMenu">
								<TransactionMenu UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
							<Col md={9}>
								<InCertification UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "SuccessfullyCertification":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3} className="LeftMenu">
								<TransactionMenu UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
							<Col md={9}>
								<SuccessfullyCertification UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "Logistics":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3}>
								<LogisticsMenu UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
								<Panel>
									<Panel.Body>
									{that.props.date.toLocaleTimeString()}
									</Panel.Body>
								</Panel>
								<Panel>
									<Panel.Body>
									{that.props.newMessage[0]}
									</Panel.Body>
								</Panel>
							</Col>
							<Col md={9} className="RightBody">
								<Logistics UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
							</Col>
						</Row>
					</div>
				)
			case "ForeignExchange":
				// console.log(that.props.ForeignExchange)
				
				const newmessage = this.props.newMessage.map((element, index) =>
					<ListGroupItem key={index}>{element}</ListGroupItem>
				);
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3}>
								<ListGroup>
									{newmessage}
								</ListGroup>
							</Col>
							<Col md={9}>
								<ForeignExchange
									UILanguage={that.props.UILanguage}
									JumpPage={that.JumpPage}
									ForeignExchange={that.props.ForeignExchange}
									Time={that.props.date.toLocaleTimeString()}
									/>
							</Col>
						</Row>
					</div>
				)
			case "Datapanel":
				return (
					<div className="outputbox container">
						<Datapanel UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
					</div>
				)
			case "Help":
				return (
					<div className="outputbox container">
						<Book UILanguage={that.props.UILanguage} JumpPage={that.JumpPage} />
					</div>
				)
			case "Mywallet":
				return (
					<div className="outputbox container">
					<Mywallet UILanguage={that.props.UILanguage} JumpPage={that.JumpPage}/>
					</div>
				)
			case "Withdraw":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3}>
								Withdraw
							</Col>
							<Col md={9}>
								Withdraw
							</Col>
						</Row>
					</div>
				)
			case "Setting":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3}>
								Setting
							</Col>
							<Col md={9}>
								Setting
							</Col>
						</Row>
					</div>
				)
			case "Logout":
				return (
					<div className="outputbox container">
						<Row className="show-grid">
							<Col md={3}>
								Logout
							</Col>
							<Col md={9}>
								Logout
							</Col>
						</Row>
					</div>
				)
			default:
				console.log("default")
				return (
					<div className="outputbox container">
						default
					</div>
				)
		}
	}
}





export default Outputbox;
// example code:
/*

import Outputbox from './ReactLibrary/Outputbox';
<Outputbox />

*/