 class Ball extends BaseClass{
	 constructor(id,color){
		super()
		this.id = id
		this.x = Math.floor(Math.random()*cw)
		this.y = Math.floor(Math.random()*ch)
		this.xv = 0
		this.yv = 0
		this.isHeld = false
		this.color = color
		this.r = 5
	}

	 changeVector(x,y){
		 	this.xv+=x
			this.yv+=y
	 }

	 draw(){
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,Tao)
		ctx.fill()
	}
 }