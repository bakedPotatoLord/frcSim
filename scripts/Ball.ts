import { BaseClass } from "./BaseClass.js"
import { Tao } from "./helpers.js"
import { cw, ch, ctx, hub, robotArray } from "./script.js"

export default class Ball extends BaseClass{
	 id: number
	 state: string
	 color: string
	 constructor(id: number,color: string){
		super()
		this.id = id
		this.x = Math.floor(Math.random()*cw)
		this.y = Math.floor(Math.random()*ch)
		this.xv = 0
		this.yv = 0
		this.state = 'free'
		this.color = color
		this.r = 5
		this.drag = 0.98

		while(this.isTouching(hub) || this.isTouchingWall() || this.istouchingArr(robotArray)){
			this.x = Math.floor(Math.random()*cw)
			this.y = Math.floor(Math.random()*ch)
		}
	}

	update(){
		if(this.state == 'free'){
			this.checkWallColision()
			this.applyDrag()
			this.updatePosition()
		}else if(this.state == 'grabbed'){

		}
	}

	updatePosition(){
		this.x += this.xv
		this.y += this.yv
	}

	draw(){
		if(this.state == 'free'){
			ctx.fillStyle = this.color
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.r,0,Tao)
			ctx.fill()
		}else{
			
		}
		
	}

	grab(){
		this.state = 'grabbed'
		this.xv= 0
		this.yv=0
	}

	throw(){
		this.state = 'air'
	}
 }