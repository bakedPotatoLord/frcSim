
import Hub from "./Hub.js"
import Robot from "./Robot.js"
import Ball from "./Ball.js"

let c = document.querySelector('canvas')
var ctx = c.getContext('2d')

const cw = 400
const ch = 400

c.width = cw
c.height = ch

let robotArray : Robot[] = Array.from(new Array(6))
let ballArray: Ball[] = Array.from(new Array(14))
const hub = new Hub();

function clear(){
	ctx.clearRect(0,0,cw,ch)
}

window.onload = () =>{
	let i:any
	for(i in robotArray){
		if(i%2==0){
			robotArray[i] = new Robot(i,'red')
		}else{
			robotArray[i] = new Robot(i,'blue')
		}
	}
	for(i in ballArray){
		if(i%2==0){
			ballArray[i] = new Ball(i,'red')
		}else{
			ballArray[i] = new Ball(i,'blue')
		}
	}
	setTimeout(draw,250)
}


function draw(){
	requestAnimationFrame(draw)
	clear()
	let i:any
	for(i of robotArray){
		i.update()
		i.draw()
	}
	for(i of ballArray){
		i.update()
		i.draw()
	}
	hub.draw()
	
}

export{c,ctx,cw,ch,hub,ballArray,robotArray}