import React, { Component } from 'react';
import '../ReactStyle/Newcontract.css';
// import $ from "jquery";
import { Glyphicon,Table,Panel,Button,FormGroup,ControlLabel,FormControl,ListGroup,ListGroupItem } from 'react-bootstrap';
import FieldGroup from './FieldGroup';

class Newcontract extends Component{
	constructor(props) {
		super(props);
		this.state = {
			"TotalAmount":0
		};
		this.TotalAmount = 0;
		this.listItems = [
			{title:"电池",sku:"K2586258423",Quantity:106,Price:0.6,currency:"RMB",Unit:"pcs"},
			{title:"铁矿石",sku:"K2586258423",Quantity:87,Price:1590,currency:"RMB",Unit:"Ton"},
			{title:"铜矿石",sku:"K2586258423",Quantity:12,Price:5036,currency:"RMB",Unit:"Ton"}
		];

		this.JumpPage = this.JumpPage.bind(this);
		
	}
	componentDidMount() {
		console.log("componentDidMount")
		for(var j = 0,len=this.listItems.length; j < len; j++) {
			this.TotalAmount = this.TotalAmount + (this.listItems[j].Quantity)*(this.listItems[j].Price)
		}
		this.setState({"TotalAmount":this.TotalAmount});
	}
	componentWillUnmount() {
		console.log("componentWillUnmount")
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
		const listmember = [
			{name:"Bob",country:"US"},
			{name:"Alice",country:"UK"},
			{name:"Lili Wang",country:"CN"}
		].map((element, index) =>
			<tr key={index}>
				<td>{index}</td>
				<td>{element.name}</td>
				<td>{element.country}</td>
			</tr>
		);
		
		const listItemsTemplate = that.listItems.map((element, index) =>
			<tr key={index}>
				<td className="ProductlistCheckbox"><input type="checkbox"/></td>
				<td>{element.title}</td>
				<td>{element.sku}</td>
				<td>{element.Quantity}</td>
				<td>{element.Price}</td>
				<td>{element.currency}</td>
				<td>{element.Unit}</td>
				<td>{(element.Quantity*element.Price).toFixed(2)}</td>
				<td>
					<Button bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button>
				</td>
			</tr>
		);
		return (
			<div className="Newcontract">
				<Panel bsStyle="info">
					<Panel.Heading>
						<Panel.Title componentClass="h3" className="NewproductFormTitle">{that.props.UILanguage["Edit contract"]}</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						<FormGroup controlId="formBasicText" >
							<ControlLabel>contract ID</ControlLabel>
							<FormControl type="text" value="00eb92da08e5343b5e80afc0830a0d7416c5194525c7862fc94c4f9396b7377a" readOnly="readonly" disabled/>
							<FormControl.Feedback />
						</FormGroup>

						<Panel>
							<Panel.Heading><Glyphicon glyph="user"/>&nbsp;{that.props.UILanguage["member"]}</Panel.Heading>
							<Panel.Body>
								<Table responsive hover>
									<thead>
										<tr>
											<th>#</th>
											<th>name</th>
											<th>country</th>
										</tr>
									</thead>
									<tbody>
										{listmember}
									</tbody>
								</Table>
							</Panel.Body>
						</Panel>

						<Panel>
						<Panel.Heading><Glyphicon glyph="duplicate"/>&nbsp;{that.props.UILanguage["description"]}</Panel.Heading>
						<Panel.Body>
						A business contract functions in the same ways as other written or oral agreements. It is a promise all parties entering into the agreement must legally uphold. Selling a business contract once all parties agree to terms can be tricky. This may require all parties to come back to the bargaining table or cost the escaping party a nominal fee per contract terms. Failing to uphold the contract's terms can result in large civil liability.
						</Panel.Body>
						</Panel>
						<Table striped bordered condensed hover>
							<thead>
								<tr>
								<th className="ProductlistHead ProductlistID">
									<Glyphicon glyph="tags" />&nbsp;ID
								</th>
								<th className="ProductlistHead ProductlistTitle">
									<Glyphicon glyph="bookmark" />&nbsp;{that.props.UILanguage["Title"]}
								</th>
								<th className="ProductlistHead">
									<Glyphicon glyph="barcode" />&nbsp;{that.props.UILanguage["SKU"]}
								</th>
								<th className="ProductlistHead">
									<Glyphicon glyph="list-alt" />&nbsp;{that.props.UILanguage["Quantity"]}
								</th>
								<th className="ProductlistHead">
									<Glyphicon glyph="list-alt" />&nbsp;{that.props.UILanguage["Price"]}
								</th>
								<th className="ProductlistHead">
									<Glyphicon glyph="list-alt" />&nbsp;{that.props.UILanguage["currency"]}
								</th>
								<th className="ProductlistHead">
									<Glyphicon glyph="list-alt" />&nbsp;{that.props.UILanguage["Unit"]}
								</th>
								<th className="ProductlistHead">
									<Glyphicon glyph="list-alt" />&nbsp;{that.props.UILanguage["amount"]}
								</th>
								<th className="ProductlistHead ProductlistOperate">
									<Glyphicon glyph="wrench" />&nbsp;{that.props.UILanguage["operate"]}
								</th>
								</tr>
							</thead>
							<tbody>
								{listItemsTemplate}
							</tbody>
						</Table>
						<Panel>
							<Panel.Heading><Glyphicon glyph="plane" />&nbsp;International Freight</Panel.Heading>
							<Panel.Body>
								A business contract functions in the same ways as other written or oral agreements. It is a promise all parties entering into the agreement must legally uphold. Selling a business contract once all parties agree to terms can be tricky. This may require all parties to come back to the bargaining table or cost the escaping party a nominal fee per contract terms. Failing to uphold the contract's terms can result in large civil liability.
							</Panel.Body>
						</Panel>
						<Button type="submit" onClick={()=>{this.JumpPage("productlist")}} className="BorderRadiusZero">
							{that.props.UILanguage["Pay"]}{this.state.TotalAmount}&nbsp;<Glyphicon glyph="btc" /> & <Glyphicon glyph="lock" />&nbsp;{that.props.UILanguage["Sign and create a contract"]}
						</Button>
					</Panel.Body>
				</Panel>
			</div>
		);
	}
}





export default Newcontract;
// example code:
/*

import Newcontract from './ReactLibrary/Newcontract';
<Newcontract />

*/