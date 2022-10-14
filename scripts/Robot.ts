import { BaseClass } from "./BaseClass.js"
import {ballArray, ch, ctx, cw, hub, robotArray} from "./script.js"
import { clamp, dist, line, Tao } from "./helpers.js"

export default class Robot extends BaseClass{
	id: any
	color: string
	targetedBall: any
	hasBall: boolean
	ballDir: number
	speed: number
	speedCap: number
	lowest: number
	constructor(id,color){
		super()
		this.id = id
		this.x = Math.floor(Math.random()*cw)
		this.y = Math.floor(Math.random()*ch)
		this.xv = 0
		this.yv = 0
		this.color = color
		this.targetedBall
		this.hasBall = false
		this.ballDir ;
		this.speed = 0.1
		this.speedCap = 1
		this.r = 15
		this.drag = 0.8

		while(this.isTouching(hub) || this.isTouchingWall()){
			this.x = Math.floor(Math.random()*cw)
			this.y = Math.floor(Math.random()*ch)

		}
	}

	draw(){
		
		ctx.fillStyle = 'black'
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,Tao)
		ctx.fill()

		ctx.lineWidth = 2
		ctx.strokeStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,15,0,Tao)
		ctx.stroke()
	}

	update(){
		this.lowest = 2*cw
		for(let j in ballArray){
			if(dist(this.x,this.y,ballArray[j].x,ballArray[j].y) <this.lowest && this.color == ballArray[j].color && ballArray[j].state == 'free'){
				this.lowest = dist(this.x,this.y,ballArray[j].x,ballArray[j].y)
				this.targetedBall =j
			}
		}
		if(this.hasBall){
			this.applyDrag()
		}else{
			this.moveTowardBall()
			this.checkBallColision()
		}
		this.checkRobotColision()
		this.checkHubColision()
		this.checkWallColision()
		//update

		this.x += clamp(this.xv,-this.speedCap,this.speedCap)
		this.y += clamp(this.yv,-this.speedCap,this.speedCap)
		
	}

	moveTowardBall(){
		line(this,this.getBall())


		this.ballDir = Math.atan2(this.y-this.getBall().y,this.x-this.getBall().x)+Math.PI

		this.xv += Math.cos(this.ballDir) * this.speed
		this.yv += Math.sin(this.ballDir) * this.speed
		this.xv = clamp(this.xv,-this.speedCap,this.speedCap)
		this.yv = clamp(this.yv,-this.speedCap,this.speedCap)
	}

	checkBallColision(){
		for(let b of ballArray){
			if(this.isTouching(b) ){
				if(this.color==b.color && !this.hasBall){
					this.hasBall = true
			 		ballArray[this.targetedBall].grab()
				}else{
					b.xv = 4* Math.cos(Math.atan2(this.x-b.x,this.y-b.y))
					b.yv = 4* Math.sin(Math.atan2(this.x-b.x,this.y-b.y))
				}
			}
		}
	}

	checkRobotColision(){
		for(let r of robotArray){
			if(this.isTouching(r) && (this.x != r.x && this.y !=r.y)){
				this.xv +=  Math.cos(Math.atan2(this.x-r.x,this.y-r.y))
				this.yv +=  Math.sin(Math.atan2(this.x-r.x,this.y-r.y))
			}
		}
	}

	checkHubColision(){
			if(this.isTouching(hub)){
				//this.xv +=  Math.cos(Math.atan2(this.x-hub.x,this.y-hub.y)+Math.PI)*this.speed*4
				//this.yv +=  Math.sin(Math.atan2(this.x-hub.x,this.y-hub.y)+Math.PI)*this.speed*4

			}

			while(this.isTouching(hub)){
				this.x +=  Math.cos(Math.atan2(this.x-hub.x,this.y-hub.y)+Math.PI)*this.speed*4
				this.y +=  Math.sin(Math.atan2(this.x-hub.x,this.y-hub.y)+Math.PI)*this.speed*4
			}
	}

	getBall(){
		return ballArray[this.targetedBall]
	}
}