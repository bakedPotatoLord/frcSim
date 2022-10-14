
import {objectDist} from "./helpers.js"
import { cw, ch } from "./script.js"

export class BaseClass{
	x: number
	y: number
	xv: number
	yv: number
	r: number
	drag: number
	constructor(){
		this.x
		this.y
		this.xv
		this.yv
		this.r
		this.drag = 1
	}

	isTouching(object){
		return (objectDist(this,object)) <= (this.r +object.r);
	}

	istouchingArr(objectArr){
		for(let k of objectArr){
			if (this.isTouching(k)){
				return true
			}
		}
		return false
	}

	isTouchingWall(){
		return (this.x+ this.r < 0) || (this.x+ this.r > cw) ||(this.y+ this.r < 0) || (this.y+ this.r > ch)
	}
	
	stop(){
		this.xv = 0
		this.yv = 0
	}
	
	applyDrag(){
		this.xv *=this.drag
		this.yv *=this.drag
	}

	checkWallColision(){
		if(this.isTouchingWall()){
			if((this.x- this.r < 0)){
				this.xv = Math.abs(this.xv) 
			}else if((this.x+ this.r > cw)){
				this.xv = -Math.abs(this.xv) 
			}
			if((this.y- this.r < 0)){
				this.yv = Math.abs(this.yv) 
			}else if((this.y+ this.r > ch)){
				this.yv = -Math.abs(this.yv) 
			}
		}
	}
}