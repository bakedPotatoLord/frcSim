

import { BaseClass } from "./BaseClass.js"
import { Tao } from "./helpers.js"
import { cw, ch, ctx } from "./script.js"

export default class Hub extends BaseClass {

    constructor(){
        super()
        this.x = cw/2
        this.y = ch/2
        this.r = 50
        
    }


    draw(){
        ctx.fillStyle = 'rgb(200,200,200)'
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,Tao)
		ctx.fill() 

        ctx.fillStyle = 'rgb(100,100,100)'
        ctx.beginPath();
		ctx.arc(this.x,this.y,this.r-10,0,Tao)
		ctx.fill() 
    }
}