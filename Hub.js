class Hub extends BaseClass{
    constructor(){
        super()
        this.x = cw/2
        this.y = ch/2
        this.r = 50
    }


    draw(){
        ctx.fillStyle = 'black'
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,Tao)
		ctx.fill() 
    }
}