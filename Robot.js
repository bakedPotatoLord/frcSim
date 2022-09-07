
const Tao =2* Math.PI

function dist(x1,y1,x2,y2){
	return Math.sqrt(((x1-x2)**2)+((y1-y2)**2))
}

function slope(x1,y1,x2,y2){
	return (y1-y2)/(x1-x2)
}

function objectSlope(ob1,ob2){
	return -slope(ob1.x,ob1.y,ob2.x,ob2.y)
}

function line(obj1,obj2){
	ctx.beginPath()
	ctx.moveTo(obj1.x,obj1.y)
	ctx.lineTo(obj2.x,obj2.y)
	ctx.stroke()
}

class Robot{
	constructor(id,color){
		this.id = id
		this.x = Math.floor(Math.random()*cw)
		this.y = Math.floor(Math.random()*ch)
		this.xv = 0
		this.yv = 0
		this.color = color
		this.targetedBall
	}


	draw(){
		
		ctx.fillStyle = 'black'
		ctx.beginPath();
		ctx.arc(this.x,this.y,15,0,Tao)
		ctx.fill()

		ctx.lineWidth = 2
		ctx.strokeStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,15,0,Tao)
		ctx.stroke()
	}

	update(){
		let lowest = 2*cw
		for(i of ballArray){
			if(dist(this.x,this.y,i.x,i.y) <lowest && this.color == i.color){
				lowest = dist(this.x,this.y,i.x,i.y)
				this.targetedBall =i
			}
		}
		line(this,this.targetedBall)
		//this.xv = -(this.x - this.targetedBall.x)/50
		//this.yv = -(this.y - this.targetedBall.y)/50
		this.moveTowardBall()
		//update
		this.x += this.xv
		this.y += this.yv
	}

	moveTowardBall(){
		let ballDir
		if(this.targetedBall.x > this.x){
			//if on right
			ballDir =Math.atan(objectSlope(this,this.targetedBall))
		}else{
			//if on left
			ballDir = Math.atan(objectSlope(this,this.targetedBall))
		}
		console.log(ballDir)




		this.xv = Math.cos(ballDir)
		this.yv = Math.sin(ballDir)
		
	}

	
	
}