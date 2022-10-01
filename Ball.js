 class Ball extends BaseClass{
	 constructor(id,color){
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
		
		this.checkWallColision()
		this.applyDrag(this.drag)
		this.updatePosition()
	}

	updatePosition(){
		this.x += this.xv
		this.y += this.yv
	}

	checkWallColision(){
		if(this.isTouchingWall()){
			console.log('touching wall')
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

	draw(){
		if(this.state = 'free'){
			ctx.fillStyle = this.color
			ctx.beginPath();
			ctx.arc(this.x,this.y,this.r,0,Tao)
			ctx.fill()
		}
		
	}

	grab(){
		this.state = 'grabbed'
	}

	throw(){
		this.state = true
	}
 }