import React from 'react';
import '../ReactStyle/topbar.css';
import sourceballs from '../img/source.gif';
import { MenuItem,Glyphicon,Navbar,Nav,NavItem,NavDropdown } from 'react-bootstrap';

class Topbar extends React.Component{
	constructor(props) {
		super(props);
		this.getUIText = this.getUIText.bind(this);
		this.JumpPage = this.JumpPage.bind(this);
	}
	componentDidMount() {
		// console.log("componentDidMount")
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
	}
	getUIText(inputdata) {
		return this.props.updataUIText(inputdata)
	}
	JumpPage(inputdata){
		console.log(inputdata);
		this.props.JumpPage(inputdata);
	}
	render(){
		
		return (
			<Navbar inverse collapseOnSelect className="topbar">
				<Navbar.Header>
					<Navbar.Brand>
					<a href="#Emporia">
					<img className="navbarimg" src={sourceballs}/>&nbsp;&nbsp;
					{this.props.UILanguage["Emporia User Center"]}
					</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
				<Nav pullRight>
					<NavDropdown id="transaction" title={this.props.UILanguage["Transaction"]}>
						<MenuItem onClick={()=>{this.JumpPage("productlist")}}>
							<Glyphicon glyph="barcode" />&nbsp;
							{this.props.UILanguage["My product list"]}
						</MenuItem>
						<MenuItem divider />
						<MenuItem onClick={()=>{this.JumpPage("Newcontract")}}>
							<Glyphicon glyph="file" />&nbsp;
							{this.props.UILanguage["Initiating contract"]}
						</MenuItem>
						<MenuItem onClick={()=>{this.JumpPage("InCertification")}}>
							<Glyphicon glyph="hourglass" />&nbsp;
							{this.props.UILanguage["Order in network authentication"]}
						</MenuItem>
						<MenuItem onClick={()=>{this.JumpPage("SuccessfullyCertification")}}>
							<Glyphicon glyph="check" />&nbsp;
							{this.props.UILanguage["Successfully certified contract"]}
						</MenuItem>
					</NavDropdown>
					<NavDropdown id="FinanceAndLogistics" title={this.props.UILanguage["Finance And Logistics"]}>
						<MenuItem onClick={()=>{this.JumpPage("Logistics")}}>
							<Glyphicon glyph="list-alt" />&nbsp;
							{this.props.UILanguage["Logistics company"]}
						</MenuItem>
						<MenuItem divider />
						<MenuItem onClick={()=>{this.JumpPage("ForeignExchange")}}>
							<Glyphicon glyph="usd" />&nbsp;
							{this.props.UILanguage["exchange rate"]}
						</MenuItem>
					</NavDropdown>
					<NavItem onClick={()=>{this.JumpPage("Datapanel")}}>
						<Glyphicon glyph="stats" />&nbsp;
						{this.props.UILanguage["Data Panel"]}
					</NavItem>
					<NavItem onClick={()=>{this.JumpPage("Help")}}>
						<Glyphicon glyph="book" />&nbsp;
						{this.props.UILanguage["Help"]}
					</NavItem>
					<NavDropdown title={this.props.UILanguage["my account"]} id="basic-nav-dropdown">
						<MenuItem onClick={()=>{this.JumpPage("Mywallet")}}>
							<Glyphicon glyph="btc" />&nbsp;
							{this.props.UILanguage["My EMP"]}
						</MenuItem>
						<MenuItem onClick={()=>{this.JumpPage("Withdraw")}}>
							<Glyphicon glyph="usd" />&nbsp;
							{this.props.UILanguage["withdraw"]}
						</MenuItem>
						<MenuItem onClick={()=>{this.JumpPage("Setting")}}>
							<Glyphicon glyph="cog" />&nbsp;
							{this.props.UILanguage["Setting"]}
						</MenuItem>
						<MenuItem divider />
						<MenuItem onClick={()=>{this.JumpPage("Login")}}>
							<Glyphicon glyph="log-out" />&nbsp;
							{this.props.UILanguage["Logout"]}
						</MenuItem>
					</NavDropdown>
					<NavDropdown title="Language" id="basic-nav-dropdown">
						<MenuItem onClick={()=>{this.getUIText("en")}}>English</MenuItem>
						<MenuItem divider />
						<MenuItem onClick={()=>{this.getUIText("cn")}}>中文</MenuItem>
						<MenuItem onClick={()=>{this.getUIText("jp")}}>にほんご</MenuItem>
						<MenuItem divider />
						<MenuItem onClick={()=>{this.getUIText("ar")}}>العربية</MenuItem>
					</NavDropdown>
				</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}


export default Topbar;

// example code:
/*

import Topbar from './ReactLibrary/Topbar';
<Topbar />

*/