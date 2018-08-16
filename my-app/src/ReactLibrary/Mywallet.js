import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/Mywallet.css';
import $ from "jquery";
import { Row,Col,Panel,Glyphicon,Table,Button,Media } from 'react-bootstrap';
import Highstock from './Highstock';

class Mywallet extends Component{
	constructor(props) {
		super(props);
		this.state = {"consolelog":[]};
		
		this.consolelog = [
				{"text":"系统提示：节点处于离线状态，请检查网络通路！"},
				{"text":"user > repair network"},
				{"text":"系统提示：节点正在修复中..........."},
				{"text":"系统提示：节点 0x00eb92da08e5343b5e80afc0830a，已经修复完成，正在处理下一个节点的修复..........."},
				{"text":"系统提示：节点 0x25c7862fc94c4f9396b7，已经修复完成，正在处理下一个节点的修复..........."},
				{"text":"系统提示：节点 0x6c5194525c7862fc94c4f9，已经修复完成，正在处理下一个节点的修复..........."},
				{"text":"系统提示：节点 0x00eb92da08e5343b5e80afc0830a，已经修复完成，正在处理下一个节点的修复..........."},
				{"text":"系统提示：刚收到来自外部节点的验证请求!"},
				{"text":"正在检查密钥完整性..................."},
				{"text":"正在检查50%"},
				{"text":"检查100%，已经检查完成。"},
				{"text":"节点0x00eb92da08e5343b5e80afc0830a0d7416c5194525c7862fc94c4f9396b7377a，正遭受攻击，服务器正在修复该攻击."},
				{"text":"发现组件库有更新，请注意升级本地组件库。输入：help updata，可以查询更新指令。"},
				{"text":"user > help updata"},
				{"text":"updata："},
				{"text":"updata [-l] [-s] /o"},
				{"text":"参数说明："},
				{"text":" [-l]:列表"},
				{"text":" [-s]:将远程组件同步到本地"},
				{"text":" /o  :执行编译更新操作"},
				{"text":"sudo updata"},
				{"text":"get origin lib..........."}
			];
		this.PromptState = true;
		this.consolelogpoit = 0;
		this.Prompttick = this.Prompttick.bind(this);
		this.ConsoleInfotick = this.ConsoleInfotick.bind(this);
	}
	componentDidMount() {
		// console.log("componentDidMount")
		var that = this;
		this.PrompttickID = setInterval(
			() => that.Prompttick(),
			500
		);
		this.ConsoleInfotickID = setInterval(
			() => that.ConsoleInfotick(),
			1000
		);
		$("#wallEarth iframe").width( $("#wallEarth").width()+"px");
		$("#wallEarth iframe").height( $("#wallEarth").width()*0.8+"px");
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
		clearInterval(this.PrompttickID);
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	Prompttick() {
		var that = this;
		var Prompt=$("#Prompt");
		if(that.PromptState){
			Prompt.css("color","black");
		}else{
			Prompt.css("color","white");
		}
		that.PromptState = !that.PromptState;
	}
	ConsoleInfotick() {
		var that = this;
		var temp = that.state.consolelog;
		if(that.consolelog.length > temp.length){
			temp.push(that.consolelog[that.consolelogpoit])
			this.setState({
				"consolelog" : temp
			});
			that.consolelogpoit++;
			$("#console").scrollTop(1000);
		}else{
			this.setState({
				"consolelog" : []
			});
			that.consolelogpoit = 0;
		}
	}
	render(){
		const consolelog = this.state.consolelog.map((element, index) =>
			<p key={index} >
				{element.text}
			</p>
		);
		
		const listItems = [
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"电池",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"铁矿石",sku:"K2586258423"},
			{title:"箱包",sku:"K2586258423"}
		].map((element, index) =>
			<tr key={index}>
				<td className="ProductlistCheckbox">{index+1}</td>
				<td>{element.title}</td>
				<td>{element.sku}</td>
				<td><Button><Glyphicon glyph="eye-open" /></Button></td>
			</tr>
		);
		return (
			<div className="Mywallet">
				<Row className="show-grid">
					<Col md={3}>
						<Panel>
							<Panel.Heading>
							<Glyphicon glyph="xbt" />&nbsp;{this.props.UILanguage["My Emp Coin"]}
							</Panel.Heading>
							<Panel.Body className="MywalletData"><span className="Integer">8,344</span>.<span>00</span></Panel.Body>
						</Panel>
					</Col>
					<Col md={3}>
						<Panel>
							<Panel.Heading>
							<Glyphicon glyph="duplicate" />&nbsp;{this.props.UILanguage["My Contract"]}
							</Panel.Heading>
							<Panel.Body className="MywalletData"><span className="Integer">86</span></Panel.Body>
						</Panel>
					</Col>
					<Col md={3}>
						<Panel>
							<Panel.Heading>
							<Glyphicon glyph="barcode" />&nbsp;{this.props.UILanguage["Total of products"]}
							</Panel.Heading>
							<Panel.Body className="MywalletData"><span className="Integer">56,308</span></Panel.Body>
						</Panel>
					</Col>
					<Col md={3}>
						<Panel>
							<Panel.Heading>
							<Glyphicon glyph="warning-sign" />&nbsp;{this.props.UILanguage["Failed transaction"]}
							</Panel.Heading>
							<Panel.Body className="MywalletData"><span className="Integer">4</span></Panel.Body>
						</Panel>
					</Col>
					</Row>
					<Row className="show-grid">
					<Col md={8}>
						<Panel>
						<Panel.Heading>{this.props.UILanguage["News"]}</Panel.Heading>
						<Panel.Body>
							<Media>
								<Media.Left>
								  <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
								</Media.Left>
								<Media.Body>
								  <Media.Heading>Media Heading</Media.Heading>
								  <p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
									ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
									tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
									fringilla. Donec lacinia congue felis in faucibus.
								  </p>
								</Media.Body>
							  </Media>
							  <Media>
								<Media.Left>
								  <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
								</Media.Left>
								<Media.Body>
								  <Media.Heading>Media Heading</Media.Heading>
								  <p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
									ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
									tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
									fringilla. Donec lacinia congue felis in faucibus.
								  </p>
								  <Media>
									<Media.Left>
									  <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
									</Media.Left>
									<Media.Body>
									  <Media.Heading>Nested Media Heading</Media.Heading>
									  <p>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
										scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
										in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
										nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
									  </p>
									</Media.Body>
								  </Media>
								</Media.Body>
							  </Media>
							  <Media>
								<Media.Body>
								  <Media.Heading>Media Heading</Media.Heading>
								  <p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
									ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
									tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
									fringilla. Donec lacinia congue felis in faucibus.
								  </p>
								</Media.Body>
								<Media.Right>
								  <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
								</Media.Right>
							  </Media>
							  <Media>
								<Media.Left>
								  <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
								</Media.Left>
								<Media.Body>
								  <Media.Heading>Media Heading</Media.Heading>
								  <p>
									Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
									ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
									tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
									fringilla. Donec lacinia congue felis in faucibus.
								  </p>
								</Media.Body>
								<Media.Right>
								  <img width={64} height={64} src="/thumbnail.png" alt="thumbnail" />
								</Media.Right>
							  </Media>
						</Panel.Body>
						</Panel>
					</Col>
					<Col md={4}>
						<Panel className="controlpanel">
							<Panel.Heading>
							<Glyphicon glyph="comment" />&nbsp;{this.props.UILanguage["Control Panel"]}
							</Panel.Heading>
							<Panel.Body>
								<Row className="show-grid controlpanelRow">
									<Col md={4}>
										<Button bsStyle="primary" className="controlpanelButton"><Glyphicon glyph="user" />&nbsp;{this.props.UILanguage["User"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="info" className="controlpanelButton"><Glyphicon glyph="floppy-save" />&nbsp;{this.props.UILanguage["SDK"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="primary" className="controlpanelButton"><Glyphicon glyph="cloud" />&nbsp;{this.props.UILanguage["EMP cloud"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="info" className="controlpanelButton"><Glyphicon glyph="book" />&nbsp;{this.props.UILanguage["EMP DOC"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="primary" className="controlpanelButton"><Glyphicon glyph="qrcode" />&nbsp;{this.props.UILanguage["EMP key"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="danger" className="controlpanelButton"><Glyphicon glyph="off" />&nbsp;{this.props.UILanguage["Logout"]}</Button>
									</Col>
								</Row>
							</Panel.Body>
						</Panel>
					</Col>
					<Col md={4}>
						<Panel className="controlpanel">
							<Panel.Heading>
							<Glyphicon glyph="cloud" />&nbsp;{this.props.UILanguage["EMP cloud"]}
							</Panel.Heading>
							<Panel.Body>
								<Row className="show-grid controlpanelRow">
									<Col md={4}>
										<Button bsStyle="primary" className="controlpanelButton"><Glyphicon glyph="user" />&nbsp;{this.props.UILanguage["User"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="info" className="controlpanelButton"><Glyphicon glyph="floppy-save" />&nbsp;{this.props.UILanguage["SDK"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="primary" className="controlpanelButton"><Glyphicon glyph="comment" />&nbsp;{this.props.UILanguage["comment"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="info" className="controlpanelButton"><Glyphicon glyph="book" />&nbsp;{this.props.UILanguage["EMP DOC"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="primary" className="controlpanelButton"><Glyphicon glyph="qrcode" />&nbsp;{this.props.UILanguage["EMP key"]}</Button>
									</Col>
									<Col md={4}>
										<Button bsStyle="danger" className="controlpanelButton"><Glyphicon glyph="off" />&nbsp;{this.props.UILanguage["Logout"]}</Button>
									</Col>
								</Row>
							</Panel.Body>
						</Panel>
					</Col>
					</Row>
					<Row className="show-grid">
					<Col md={4}>
						<Panel>
							<Panel.Heading>
							<Glyphicon glyph="console" />&nbsp;{this.props.UILanguage["Console"]}
							</Panel.Heading>
							<Panel.Body id="console">
							{consolelog}
							<p>user&nbsp;>&nbsp;<span id="Prompt">_</span></p>
							</Panel.Body>
						</Panel>
						<Panel>
							<Panel.Body>
								<Table striped bordered condensed hover>
									<thead>
										<tr>
										<th><Glyphicon glyph="tags" />&nbsp;ID</th>
										<th><Glyphicon glyph="bookmark" />&nbsp;{this.props.UILanguage["Title"]}</th>
										<th><Glyphicon glyph="barcode" />&nbsp;{this.props.UILanguage["SKU"]}</th>
										<th><Glyphicon glyph="wrench" />&nbsp;{this.props.UILanguage["operate"]}</th>
										</tr>
									</thead>
									<tbody>
										{listItems}
									</tbody>
								</Table>
							</Panel.Body>
						</Panel>
					</Col>
					<Col md={8} id="wallEarth">
						<Panel>
						<Panel.Heading>{this.props.UILanguage["Emp Coin Index"]}</Panel.Heading>
						<Panel.Body><Highstock /></Panel.Body>
						</Panel>
						<iframe src="/Earth" className="iframe"></iframe>
					</Col>
				</Row>
			</div>
		);
	}
}





export default Mywallet;
// example code:
/*

import Mywallet from './ReactLibrary/Mywallet';
<Mywallet />

*/