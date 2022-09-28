 class Ball extends BaseClass{
	 constructor(id,color){
		super()
		this.id = id
		this.x = Math.floor(Math.random()*cw)
		this.y = Math.floor(Math.random()*ch)
		this.xv = 0
		this.yv = 0
		this.isgrabbed = false
		this.color = color
		this.r = 5
	}

	update(){
		this.updatePosition
	}

	updatePosition(){
		this.x += this.xv
		this.y += this.yv
	}

	draw(){
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,Tao)
		ctx.fill()
	}

	grab(robot){
		this.isgrabbed = true
	}
 }