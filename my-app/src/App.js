import React, { Component } from 'react';
import './App.css';

import $ from "jquery";

import LanguageClass from './ui/LanguageClass.js';
import Loader from './ReactLibrary/Loader';
import Topbar from './ReactLibrary/Topbar';
import AppBackGroup from './ReactLibrary/AppBackGroup';
import Outputbox from './ReactLibrary/Outputbox';

class App extends Component {
	constructor(props) {
		super(props);
		this.language = "en";
		this.lug = new LanguageClass();
		this.state = {
			"page" : "Register",
			"UILanguage" : this.lug.outPutUIText(this.language),
			"newMessage" : [],
			"date": new Date(),
			"ForeignExchange" : []
		};
		this.newMessage = ["普雷特当天在罗马尼亚国家银行发表演讲时对欧元区面临的包括保护主义在内的全球性风险表示担忧。但他认为，现在就对贸易冲突会否影响商业环境作出判断还为时尚早。",
			"【金融曝光台315特别活动正式启动】近年来，银行卡被盗刷、买理财遇飞单的案例屡见不鲜，金融消费者维权举步维艰，新浪金融曝光台将履行媒体监督职责，帮助消费者解决金融纠纷。 ",
			"今年以来，A股公司购买理财规模继续攀升。Wind统计显示，截至目前，今年共有1080家A股公司购买理财，累计购买数量9548只，累计购买规模7471.03亿元，购买规模同比去年增幅21.89%。",
			"已持续三年的刺激计划终于看到终点，但欧洲央行将利率维持在创纪录低点，并暗示明年9月之前不太可能加息。"];
		this.ForeignExchange = [
			{title:"GBP",before:25,v:25},
			{title:"RMB",before:25,v:25},
			{title:"USD",before:25,v:25},
			{title:"EUR",before:25,v:25},
			{title:"CHF",before:25,v:25},
			{title:"CAD",before:25,v:25},
			{title:"JPY",before:25,v:25}
		];

		this.JumpPage = this.JumpPage.bind(this);
		this.updataUIText = this.updataUIText.bind(this);
		this.Timetick = this.Timetick.bind(this);
		this.Messagetick = this.Messagetick.bind(this);
		this.ForeignExchangetick = this.ForeignExchangetick.bind(this);
	}
	componentDidMount() {
		// console.log("componentDidMount")
		var that = this;
		this.timerID = setInterval(
			() => that.Timetick(),
			1000
		);
		this.MessageID = setInterval(
			() => that.Messagetick(),
			1500
		);
		this.ForeignExchangeID = setInterval(
			() => that.ForeignExchangetick(),
			500
		);
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
		clearInterval(this.timerID);
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
	}
	Timetick() {
		var that = this;
		this.setState({
			"date" : new Date()
		});
	}
	Messagetick() {
		var that = this;
		this.setState({
			"newMessage" : this.newMessage.sort(function(){ return 0.5 - Math.random() })
		});
	}
	ForeignExchangetick() {
		var that = this;
		this.setState({
			"ForeignExchange" : that.ForeignExchange.map((vvv)=>{
				return {
					title:vvv.title,
					before:(vvv.v - Math.random() - Math.random()*10).toFixed(4),
					v:(vvv.v - Math.random() - Math.random()*10).toFixed(4)
				}
			})
		});
	}
	JumpPage(inputdata){
		var that = this;
		that.setState({
			"page": inputdata
		});
	}
	updataUIText(inputdata){
		var lug = new LanguageClass();
		this.setState({
			"UILanguage": lug.outPutUIText(inputdata)
		});
		return lug.outPutUIText(inputdata)
	}
	render() {
		return (
			<div id="App" className="App">
				<AppBackGroup page={this.state.page}/>
				<Topbar
					UILanguage={this.state.UILanguage}
					JumpPage={this.JumpPage}
					updataUIText={this.updataUIText}
				/>
				<Loader />
				<Outputbox
					UILanguage={this.state.UILanguage}
					JumpPage={this.JumpPage}
					page={this.state.page}
					newMessage={this.state.newMessage}
					date={this.state.date}
					ForeignExchange={this.state.ForeignExchange}
					/>
			</div>
		);
	}
}

export default App;
