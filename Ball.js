 class Ball{
	 constructor(id,color){
		this.id = id
		this.x = Math.floor(Math.random()*cw)
		this.y = Math.floor(Math.random()*ch)
		this.xv = 0
		this.yv = 0
		this.isHeld = false
		this.color = color
	}

	 changeVector(x,y){
		 	this.xv+=x
			this.yv+=y
	 }

	 draw(){
		ctx.fillStyle = this.color
		ctx.beginPath();
		ctx.arc(this.x,this.y,5,0,Tao)
		ctx.fill()
	}
 }