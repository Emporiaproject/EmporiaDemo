import React, { Component } from 'react';
import '../ReactStyle/InCertification.css';
import $ from "jquery";
// import * as d3 from "d3";
import { Alert,Glyphicon,Panel,ProgressBar,Table,Badge,SplitButton,MenuItem,Row,Col } from 'react-bootstrap';
import PaginationUI from './PaginationUI';
import Filter from './Filter';

class InCertification extends Component{
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
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	JumpPage(inputdata){
		console.log(inputdata);
		this.props.JumpPage(inputdata);
	}
	render(){
		this.result=[
				{
					"title":"00eb92da08e5343b5e80afc0830a0d7416c5194525c7862fc94c4f9396b7377a",
					"success":66,
					"wait":20,
					"Logistics":"EMS",
					"danger":5,
					"From":"China",
					"To":"USA",
					"tag":["EMS","FromChina","ToUSA"]
				},
				{
					"title":"00eb92da08e5343b5e80afc0830a0d7416c5194525c7862fc94c4f9396b7377a",
					"success":6,
					"wait":30,
					"Logistics":"DHL",
					"danger":22,
					"From":"UK",
					"To":"USA",
					"tag":["DHL","FromUK","ToUSA"]
				},
				{
					"title":"00eb92da08e5343b5e80afc0830a0d7416c5194525c7862fc94c4f9396b7377a",
					"success":5,
					"wait":6,
					"Logistics":"Fexex",
					"danger":15,
					"From":"UK",
					"To":"USA",
					"tag":["Fexex","FromUK","ToUSA"]
				},
				{
					"title":"00eb92da08e5343b5e80afc0830a0d7416c5194525c7862fc94c4f9396b7377a",
					"success":35,
					"wait":18,
					"Logistics":"SF",
					"danger":40,
					"From":"China",
					"To":"JP",
					"tag":["SF","FromChina","ToJP"]
				},
				{
					"title":"00eb92da08e5343b5e80afc0830a0d7416c5194525c7862fc94c4f9396b7377a",
					"success":35,
					"wait":20,
					"Logistics":"Fexex",
					"danger":5,
					"From":"UK",
					"To":"USA",
					"tag":["Fexex","FromUK","ToUSA"]
				}
			]
		const ppp = this.result.map((element, index) =>
			<Col xs={6} md={6} key={index} className={element.tag.join(" ")}>
				<Panel>
					<Panel.Heading>
						<Glyphicon glyph="hourglass" />&nbsp;
					</Panel.Heading>
					<Panel.Body>
						<Table striped bordered condensed hover>
							<thead>
								<tr>
								<th><Glyphicon glyph="tags" />&nbsp;ID</th>
								<th><Glyphicon glyph="user" />&nbsp;user</th>
								<th><Glyphicon glyph="user" />&nbsp;user</th>
								<th><Glyphicon glyph="plane" />&nbsp;Logistics</th>
								</tr>
							</thead>
							<tbody>
								<tr>
								<td>1</td>
								<td>jane</td>
								<td>Tom</td>
								<td>{element.Logistics}</td>
								</tr>
							</tbody>
						</Table>
						<Table responsive>
							<thead>
								<tr><th>From</th><th>To</th></tr>
							</thead>
							<tbody>
								<tr>
								<td>{element.From}</td>
								<td>{element.To}</td>
								</tr>
							</tbody>
						</Table>
						<ProgressBar>
							<ProgressBar active now={element.success} label={element.success.toString()+`%`} key={1} />
							<ProgressBar bsStyle="warning" label={element.wait.toString()+`%`} now={element.wait} key={2} />
							<ProgressBar active bsStyle="danger" label={element.danger.toString()+`%`} now={element.danger} key={3} />
						</ProgressBar>
						
					</Panel.Body>
					<Panel.Footer>
						<Row className="show-grid">
							<Col xs={8} md={8}></Col>
							<Col xs={4} md={4} className="onRight">
								<SplitButton title="MORE" key={index}>
									<MenuItem eventKey="1" onClick={()=>{this.JumpPage("Newcontract")}}><Glyphicon glyph="pencil" />&nbsp;Edit</MenuItem>
									<MenuItem eventKey="2"><Glyphicon glyph="lock" />&nbsp;Lock</MenuItem>
									<MenuItem divider />
									<MenuItem eventKey="3"><Glyphicon glyph="eye-close" />&nbsp;Hidden</MenuItem>
								</SplitButton>
							</Col>
						</Row>
					</Panel.Footer>
				</Panel>
			</Col>
		);
		return (
			<div className="InCertification">
				<Filter result={this.result} />
				<Row className="show-grid">
					{ppp}
				</Row>
				<PaginationUI />
			</div>
		);
	}
}





export default InCertification;
// example code:
/*

import InCertification from './ReactLibrary/InCertification';
<InCertification />

*/