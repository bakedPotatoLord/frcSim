
let c = document.querySelector('canvas')
var ctx = c.getContext('2d')

const cw = 400
const ch = 400

c.width = cw
c.height = ch

let robotArray = Array.from(new Array(1))
let ballArray = Array.from(new Array(1))


function clear(){
	ctx.clearRect(0,0,cw,ch)
}

window.onload = () =>{
	for(i in robotArray){
		if(i%2==0){
			robotArray[i] = new Robot(i,'red')
		}else{
			robotArray[i] = new Robot(i,'blue')
		}
	}
	for(i in ballArray){
		if(i%2==0){
			ballArray[i] = new Ball(i,'red')
		}else{
			ballArray[i] = new Ball(i,'blue')
		}
	}
	draw()
}


function draw(){
	requestAnimationFrame(draw)
	clear()
	
	for(i of robotArray){
		i.draw()
	}
	for(i of ballArray){
		i.draw()
	}

	for(i of robotArray){
		i.update()
		i.draw()
	}
	for(i of ballArray){
		i.draw()
	}
	
}