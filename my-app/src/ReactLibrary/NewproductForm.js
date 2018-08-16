import React, { Component } from 'react';
import '../ReactStyle/NewproductForm.css';
// import $ from "jquery";
import { Panel,Image,Button,FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import FieldGroup from './FieldGroup';

class NewproductForm extends Component{
	constructor(props) {
		super(props);
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
			<div className="NewproductForm">
				<Panel bsStyle="info">
					<Panel.Heading>
						<Panel.Title componentClass="h3" className="NewproductFormTitle">{that.props.UILanguage["Edit product template"]}</Panel.Title>
					</Panel.Heading>
					<Panel.Body>
						<form>
							<FieldGroup
								id="formControlsText"
								type="text"
								label={that.props.UILanguage["Title"]}
								placeholder={that.props.UILanguage["Enter Title"]}
								/>
							<FieldGroup
								id="formControlsEmail"
								type="text"
								label={that.props.UILanguage["SKU"]}
								placeholder={that.props.UILanguage["Enter SKU"]}
								/>
							<FieldGroup
								id="formControlsFile"
								type="file"
								label={that.props.UILanguage["image"]}
								help={that.props.UILanguage["Product image file here"]}
								/>
							<Image src="thumbnail.png" thumbnail />

							<FormGroup controlId="formControlsSelect">
								<ControlLabel>{that.props.UILanguage["Category"]}</ControlLabel>
								<FormControl componentClass="select" placeholder="select">
									<option value="select">select</option>
									<option value="other">...</option>
								</FormControl>
							</FormGroup>
							

							<FormGroup controlId="formControlsTextarea">
								<ControlLabel>{that.props.UILanguage["description"]}</ControlLabel>
								<FormControl componentClass="textarea" placeholder={that.props.UILanguage["description"]} />
							</FormGroup>

							<Button type="submit" onClick={()=>{this.JumpPage("productlist")}} className="BorderRadiusZero">
								{that.props.UILanguage["Submit"]}
							</Button>
						</form>
					</Panel.Body>
				</Panel>
				
			</div>
		);
	}
}





export default NewproductForm;
// example code:
/*

import NewproductForm from './ReactLibrary/NewproductForm';
<NewproductForm />

*/