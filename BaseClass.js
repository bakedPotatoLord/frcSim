class BaseClass{
	constructor(){
		this.x
		this.y
		this.xv
		this.yv
		this.r
		
	}

	isTouching(object){
		return (objectDist(this,object)) <= (this.r +object.r);
	}
	
}