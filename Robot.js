class Robot extends BaseClass{
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
		this.speed = 4
		this.r = 15
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
			if(dist(this.x,this.y,ballArray[j].x,ballArray[j].y) <this.lowest && this.color == ballArray[j].color){
				this.lowest = dist(this.x,this.y,ballArray[j].x,ballArray[j].y)
				this.targetedBall =j
			}
		}
		line(this,ballArray[this.targetedBall])

		this.moveTowardBall()
		//update
		this.x += this.xv
		this.y += this.yv
	}

	moveTowardBall(){
		
		if(this.targetedBall.x > this.x){
			//if on right
			this.ballDir =Math.atan(objectSlope(this,ballArray[this.targetedBall]))
		}else{
			//if on left
			this.ballDir = Math.atan(objectSlope(this,ballArray[this.targetedBall]))+Math.PI
		}
		this.xv = Math.cos(this.ballDir) * this.speed
		this.yv = Math.sin(this.ballDir) * this.speed
	}

	checkBallColision(r){
		for(b of ballArray){
			if(objectDistdist(r,b) <= r.r+b.r ){
			 this.hasBall = true
			}
		}
		
	}
}