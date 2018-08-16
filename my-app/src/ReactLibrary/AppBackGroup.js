import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../ReactStyle/AppBackGroup.css';
import $ from "jquery";
// import * as d3 from "d3";
// import { Alert,Button } from 'react-bootstrap';

class Circle {
    //创建对象
    //以一个圆为对象
    //设置随机的 x，y坐标，r半径，_mx，_my移动的距离
    //this.r是创建圆的半径，参数越大半径越大
    //this._mx,this._my是移动的距离，参数越大移动
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10 ;
        this._mx = Math.random() ;
        this._my = Math.random() ;

    }

    //canvas 画圆和画直线
    //画圆就是正常的用canvas画一个圆
    //画直线是两个圆连线，为了避免直线过多，给圆圈距离设置了一个值，距离很远的圆圈，就不做连线处理
    drawCircle(ctx) {
        ctx.beginPath();
        //arc() 方法使用一个中心点和半径，为一个画布的当前子路径添加一条弧。
        ctx.arc(this.x, this.y, this.r, 0, 360)
        ctx.closePath();
        ctx.fillStyle = 'rgba(204, 204, 204, 0.3)';
        ctx.fill();
    }

    drawLine(ctx, _circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy)
        if (d < 150) {
            ctx.beginPath();
            //开始一条路径，移动到位置 this.x,this.y。创建到达位置 _circle.x,_circle.y 的一条线：
            ctx.moveTo(this.x, this.y);   //起始点
            ctx.lineTo(_circle.x, _circle.y);   //终点
            ctx.closePath();
            ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)';
            ctx.stroke();
        }
    }

    // 圆圈移动
    // 圆圈移动的距离必须在屏幕范围内
    move(w, h) {
        this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
        this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);
        this.x += this._mx / 2;
        this.y += this._my / 2;
    }
}

// 鼠标点画圆闪烁变动
class currentCirle extends Circle {
    constructor(x, y) {
        super(x, y)
    }

    drawCircle(ctx) {
        ctx.beginPath();
        //注释内容为鼠标焦点的地方圆圈半径变化
        this.r = (this.r < 14 && this.r > 1) ? this.r + (Math.random() * 2 - 1) : 2;
        // this.r = 8;
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 77, 54,' + (parseInt(Math.random() * 100) / 100) + ')'
        // ctx.fillStyle = 'rgba(255, 77, 54, 0.6)'
        ctx.fill();
    }
}

class AppBackGroup extends Component{
	constructor(props) {
		super(props);
		this.loadlist = {
			video:false,
			canvas:false
		}
	}
	componentDidMount() {
		// console.log("componentDidMount")
		if(this.loadlist.video){
			// console.log(document.getElementById("AppBackGroupVideo").duration);
			document.getElementById("AppBackGroupVideo").currentTime=60
		}
		if(this.loadlist.canvas){
			this.drawBackgroup();
			window.addEventListener("resize", this.drawBackgroup.bind(this));
		}
		$(".bgiframe").width($("#canvas").width()+"px");
		$(".bgiframe").height($("#canvas").height()+"px");
	}
	componentWillUnmount() {
		// console.log("componentWillUnmount")
	}
	componentDidUpdate() {
		// console.log("componentDidUpdate")
		
		$(".bgiframe").width($("#canvas").width()+"px");
		$(".bgiframe").height($("#canvas").height()+"px");
	}
	drawBackgroup(){
		//更新页面用requestAnimationFrame替代setTimeout
		window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

		let canvas = document.getElementById('canvas');
		let ctx = canvas.getContext('2d');
		let w = canvas.width = document.body.scrollWidth;
		let h = canvas.height = document.body.scrollHeight;
		let circles = [];
		let current_circle = new currentCirle(0, 0)

		let draw = function () {
			ctx.clearRect(0, 0, w, h);
			for (let i = 0; i < circles.length; i++) {
				circles[i].move(w, h);
				circles[i].drawCircle(ctx);
				for (var j = i + 1; j < circles.length; j++) {
					circles[i].drawLine(ctx, circles[j])
				}
			}
			if (current_circle.x) {
				current_circle.drawCircle(ctx);
				for (var k = 1; k < circles.length; k++) {
					current_circle.drawLine(ctx, circles[k])
				}
			}
			requestAnimationFrame(draw)
		}

		let init = function (num) {
			for (var i = 0; i < num; i++) {
				circles.push(new Circle(Math.random() * w, Math.random() * h));
			}
			draw();
		}
		window.addEventListener('load', init(58));
		window.onmousemove = function (e) {
			e = e || window.event;
			current_circle.x = e.clientX;
			current_circle.y = e.clientY;
		}
		window.onmouseout = function () {
			current_circle.x = null;
			current_circle.y = null;
		};
		
	}
	render(){
		
		var that = this;
		switch(that.props.page){
			case "productlist":
				this.loadlist.video = false;
				this.loadlist.canvas = true;
				return (
					<div className="AppBackGroup">
						<canvas id="canvas"></canvas>
						<video id="AppBackGroupVideo"
							className="AppBackGroupVideo"
							src="ChillingEarthAnimationHD.mp4"
							muted
							loop="loop"
							autoPlay="autoPlay"></video>
					</div>
				);
			case "newproduct":
				this.loadlist.video = false;
				this.loadlist.canvas = true;
				return (
					<div className="AppBackGroup">
						<canvas id="canvas"></canvas>
						<video id="AppBackGroupVideo"
							className="AppBackGroupVideo"
							src="ChillingEarthAnimationHD.mp4"
							muted
							loop="loop"
							autoPlay="autoPlay"></video>
					</div>
				);
			case "Newcontract":
				this.loadlist.video = false;
				this.loadlist.canvas = true;
				return (
					<div className="AppBackGroup">
						<canvas id="canvas"></canvas>
						<video id="AppBackGroupVideo"
							className="AppBackGroupVideo"
							src="ChillingEarthAnimationHD.mp4"
							muted
							loop="loop"
							autoPlay="autoPlay"></video>
					</div>
				);
			case "Logistics":
			case "ForeignExchange":
			case "Help":
				this.loadlist.video = false;
				this.loadlist.canvas = true;
				return (
					<div className="AppBackGroup">
						<canvas id="canvas"></canvas>
						<video id="AppBackGroupVideo"
							className="AppBackGroupVideo"
							src="TheDataCenterMuralProject_ Homeof_TheCloud_.mp4"
							muted
							loop="loop"
							autoPlay="autoPlay"></video>
					</div>
				);
			case "SuccessfullyCertification":
			case "Datapanel":
				this.loadlist.video = false;
				this.loadlist.canvas = true;
				return (
					<div className="AppBackGroup">
						<canvas id="canvas"></canvas>
					</div>
				);
			case "InCertification":
			case "Login":
			case "Mywallet":
				this.loadlist.video = false;
				this.loadlist.canvas = true;
				return (
					<div className="AppBackGroup">
						<canvas id="canvas"></canvas>
						<iframe src="/CharacterRain" className="iframe bgiframe"></iframe>
					</div>
				);
			default:
				this.loadlist.video = true;
				this.loadlist.canvas = true;
				return (
					<div className="AppBackGroup">
						<canvas id="canvas"></canvas>
						<video id="AppBackGroupVideo"
							className="AppBackGroupVideo"
							src="ChillingEarthAnimationHD.mp4"
							muted
							loop="loop"
							autoPlay="autoPlay"></video>
					</div>
				);
		}
	}
}





export default AppBackGroup;
// example code:
/*

import AppBackGroup from './ReactLibrary/AppBackGroup';
<AppBackGroup />

*/