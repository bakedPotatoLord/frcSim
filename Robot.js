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
		this.speed = 0.1
		this.speedCap = 1
		this.r = 15
		this.drag = 0.9
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
		if(this.hasBall){
			this.applyDrag()
			ballArray[this.targetedBall].x
		}else{
			this.moveTowardBall()
			this.checkBallColision()
		}

		this.applySpeedCap()
		//update
		this.x += this.xv
		this.y += this.yv
	}

	moveTowardBall(){
		line(this,ballArray[this.targetedBall])
		if(ballArray[this.targetedBall].x > this.x){
			//if on right
			this.ballDir =Math.atan(objectSlope(this,ballArray[this.targetedBall]))
		}else{
			//if on left
			this.ballDir = Math.atan(objectSlope(this,ballArray[this.targetedBall]))+Math.PI
		}
		this.xv += Math.cos(this.ballDir) * this.speed
		this.yv += Math.sin(this.ballDir) * this.speed
	}

	checkBallColision(r){
		for(let b of ballArray){
			if(this.isTouching(b) && b.color == this.color){

			 this.hasBall = true
			
			 ballArray[this.targetedBall].grab(this)
			}else if(this.isTouching(b)){
				console.log('tonched a ball that is not of same color')
				b.xv = 4* Math.cos(Math.atan2(this.x-b.x,this.y-b.y))
				b.yv = 4* Math.sin(Math.atan2(this.x-b.x,this.y-b.y))
			}
		}
		
	}
	applySpeedCap(){
		if(this.xv >= this.speedCap){
			this.xv = this.speedCap
		}
		if(this.yv >= this.speedCap){
			this.yv = this.speedCap
		}
	}
}