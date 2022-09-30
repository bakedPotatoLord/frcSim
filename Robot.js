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
		this.speed = 2
		this.speedCap = 2
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
			if(dist(this.x,this.y,ballArray[j].x,ballArray[j].y) <this.lowest && this.color == ballArray[j].color && !ballArray[j].grabbed){
				this.lowest = dist(this.x,this.y,ballArray[j].x,ballArray[j].y)
				this.targetedBall =j
				console.log(ballArray[j].grabbed)
			}
		}
		if(this.hasBall){
			this.applyDrag()
			this.getBall().x
		}else{
			this.moveTowardBall()
			this.checkBallColision()
		}
		//update

		this.x += clamp(this.xv,-this.speedCap,this.speedCap)
		this.y += clamp(this.yv,-this.speedCap,this.speedCap)
		
	}

	moveTowardBall(){
		line(this,this.getBall())


		this.ballDir = Math.atan2(this.y-this.getBall().y,this.x-this.getBall().x)+Math.PI

		this.xv = Math.cos(this.ballDir) * this.speed
		this.yv = Math.sin(this.ballDir) * this.speed
	}

	checkBallColision(r){
		for(let b of ballArray){
			if(this.isTouching(b) && b.color == this.color){

			 this.hasBall = true
			
			 this.getBall().grab()
			}else if(this.isTouching(b)){
				console.log('tonched a ball that is not of same color')
				b.xv = 4* Math.cos(Math.atan2(this.x-b.x,this.y-b.y))
				b.yv = 4* Math.sin(Math.atan2(this.x-b.x,this.y-b.y))
			}
		}
		
	}

	getBall(){
		return ballArray[this.targetedBall]
	}
}