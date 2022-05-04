alert('Enter를 눌러야 게임이 시작 됩니다!')
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let sc = document.getElementById('sc')

let score = 0

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 사진
var img1 = new Image();
img1.src = "https://user-images.githubusercontent.com/91381230/166097501-77374164-5182-4721-af3c-3a10859bbade.JPG"

// 캐릭터
let Rion = {
    x: 460,
    y: 600,
    width : 80,
    height : 200,
    draw(){
        ctx.drawImage(img1,this.x,this.y,this.width,this.height)
    }
    
}
window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    switch(e.keyCode) {
        case 13 :
        Rion.draw()
        break;
        /*left*/
        case 37:
            Rion.x-=10
            
            ctx.clearRect(Rion.x+10,Rion.y,Rion.width,Rion.height)
            Rion.draw();
            if(Rion.x==-10){
                Rion.x =0
                Rion.draw()
            }
            
            if(Rion.x==930){
            Rion.x = 920
            Rion.draw()
        }
        break;
		
        /*right*/
        case 39:
        Rion.x+=10

        ctx.clearRect(Rion.x-10,Rion.y,Rion.width,Rion.height)
        Rion.draw();
        if(Rion.x==-10){
            Rion.x =0
            Rion.draw()
        }

        if(Rion.x==890){
            Rion.x = 880
            Rion.draw()
        }

        //right
		break;
	}	
}
// 장애물생성
class createSmall {
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = height;
}
    draw() {
            ctx.fillStyle ='red'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
            
        }
}
class createMedium {
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = height;
}
    draw() {
            ctx.fillStyle ='blue'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
            
        }
}

class createBig {
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = height;
}
    draw() {
            ctx.fillStyle ='yellow'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
            
        }
}

class createFall {
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = height;
}
    draw() {
            ctx.fillStyle ='black'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
}

class createClear {
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = height;
}
    draw() {
            ctx.fillStyle ='bisque'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
}

let scoreTimer = setInterval(function(){
    sc.innerHTML = `<b>${score}</b>`
},100)

