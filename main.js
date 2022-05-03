alert('Enter를 눌러야 게임이 시작 됩니다!')
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let sc = document.getElementById('sc')
let weaponStat = document.getElementById('weaponStat')
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

let scoreTimer = setInterval(function(){
    sc.innerHTML = `${score}`
},10)

// 장애물 생성에 대한 키보드 이벤트
window.addEventListener("keydown", createSmallKeyboard, false);
// 엔터를 칠경우 게임이 시작됨과 동시에 장애물 생성
function createSmallKeyboard(e) {
    switch(e.keyCode) {
        case 13 :
            createSmallTime = 0
            setInterval(function(){
                createSmallTime+=1

            console.log(createSmallTime)
            if (createSmallTime %20 == 1){                
                small = new createSmall(Math.random() * 700,0,40,10)
                small.draw()
                small1 = new createSmall(Math.random() * 700,0,40,10)
                small1.draw()
                small2 = new createSmall(Math.random() * 700,0,40,10)
                small2.draw()
                small3 = new createSmall(Math.random() * 700,0,40,10)
                small3.draw()
            }
                else {  
                    small.y +=100
                    ctx.clearRect(small.x,small.y-100,40,10)
                    small.draw()
                    small1.y +=100
                    ctx.clearRect(small1.x,small1.y-100,40,10)
                    small1.draw()            
                    small2.y +=100
                    ctx.clearRect(small2.x,small2.y-100,40,10)
                    small2.draw()

                    small3.y +=100
                    ctx.clearRect(small3.x,small3.y-100,40,10)
                    small3.draw()
                    let collisionX = (small.x+small.width) -Rion.x
                    let collisionY = (small.y+small.height) - Rion.y -100
                    let collisionX1 = (small1.x+small1.width) -Rion.x
                    let collisionY1 = (small1.y+small1.height) - Rion.y -100
                    let collisionX2 = (small2.x+small2.width) -Rion.x
                    let collisionY2 = (small2.y+small2.height) - Rion.y -100
                    let collisionX3 = (small3.x+small3.width) -Rion.x
                    let collisionY3 = (small3.y+small3.height) - Rion.y -100
                    if (((0 < collisionX) && (collisionX <Rion.width+small.width )) && ((0 < collisionY) && (collisionY <Rion.height + small.height))){
                        score+=50
                        console.log(score)
                        small.x = 999
                        small.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                    if (((0 < collisionX1) && (collisionX1 <Rion.width+small1.width )) && ((0 < collisionY1) && (collisionY1 <Rion.height + small1.height))){
                        score+=50
                        console.log(score)
                        small1.x = 999
                        small1.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                            
                        }
                    }  
                    if (((0 < collisionX2) && (collisionX2 <Rion.width+small2.width )) && ((0 < collisionY2) && (collisionY2 <Rion.height + small2.height))){
                        score+=50
                        console.log(score)
                        small2.x = 999
                        small2.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                            
                        }
                    }  
                    if (((0 < collisionX3) && (collisionX3 <Rion.width+small3.width )) && ((0 < collisionY3) && (collisionY3 <Rion.height + small3.height))){
                        score+=50
                        console.log(score)
                        small3.x = 999
                        small3.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                            
                        }
                    }  

                }

            
            if (createSmallTime %20 ==4){                
                small4 = new createSmall(Math.random() * 700,0,40,10)
                small4.draw()
                small5 = new createSmall(Math.random() * 700,0,40,10)
                small5.draw()
                small6 = new createSmall(Math.random() * 700,0,40,10)
                small6.draw()
            }
            else {  
                small4.y +=100
                ctx.clearRect(small4.x,small4.y-100,40,10)
                small4.draw()
                small5.y +=100
                ctx.clearRect(small5.x,small5.y-100,40,10)
                small5.draw()            
                small6.y +=100
                ctx.clearRect(small6.x,small6.y-100,40,10)
                small6.draw()

                
                let collisionX4 = (small4.x+small4.width) -Rion.x
                let collisionY4 = (small4.y+small4.height) - Rion.y -100
                let collisionX5 = (small5.x+small5.width) -Rion.x
                let collisionY5 = (small5.y+small5.height) - Rion.y -100
                let collisionX6 = (small6.x+small6.width) -Rion.x
                let collisionY6 = (small6.y+small6.height) - Rion.y -100
                
                if (((0 < collisionX4) && (collisionX4 <Rion.width+small4.width )) && ((0 < collisionY4) && (collisionY4 <Rion.height + small4.height))){
                    score+=50
                    console.log(score)
                    small4.x = 999
                    small4.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                    }
                }  
                if (((0 < collisionX5) && (collisionX5 <Rion.width+small5.width )) && ((0 < collisionY5) && (collisionY5 <Rion.height + small5.height))){
                    score+=50
                    console.log(score)
                    small5.x = 999
                    small5.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                        
                    }
                }  
                if (((0 < collisionX6) && (collisionX6 <Rion.width+small6.width )) && ((0 < collisionY6) && (collisionY6 <Rion.height + small6.height))){
                    score+=50
                    console.log(score)
                    small6.x = 999
                    small6.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                        
                    }
                }  
                

            }  

            if (createSmallTime %20 == 10){                
                small7 = new createSmall(Math.random() * 700,0,40,10)
                small7.draw()
                small8 = new createSmall(Math.random() * 700,0,40,10)
                small8.draw()
                small9 = new createSmall(Math.random() * 700,0,40,10)
                small9.draw()
            }
            else {  
                small7.y +=100
                ctx.clearRect(small7.x,small7.y-100,40,10)
                small7.draw()
                small8.y +=100
                ctx.clearRect(small8.x,small8.y-100,40,10)
                small8.draw()            
                small9.y +=100
                ctx.clearRect(small9.x,small9.y-100,40,10)
                small9.draw()

                
                let collisionX7 = (small7.x+small7.width) -Rion.x
                let collisionY7 = (small7.y+small7.height) - Rion.y -100
                let collisionX8 = (small8.x+small8.width) -Rion.x
                let collisionY8 = (small8.y+small8.height) - Rion.y -100
                let collisionX9 = (small9.x+small9.width) -Rion.x
                let collisionY9 = (small9.y+small9.height) - Rion.y -100
                
                if (((0 < collisionX7) && (collisionX7 <Rion.width+small7.width )) && ((0 < collisionY7) && (collisionY7 <Rion.height + small7.height))){
                    score+=50 
                    console.log(score)
                    small7.x = 999
                    small7.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                    }
                }  
                if (((0 < collisionX8) && (collisionX8 <Rion.width+small8.width )) && ((0 < collisionY8) && (collisionY8 <Rion.height + small8.height))){
                    score+=50
                    console.log(score)
                    small8.x = 999
                    small8.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                        
                    }
                }  
                if (((0 < collisionX9) && (collisionX9 <Rion.width+small9.width )) && ((0 < collisionY9) && (collisionY9 <Rion.height + small9.height))){
                    score+=50
                    console.log(score)
                    small9.x = 999
                    small9.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                        
                    }
                }  
                

            }  

  
   
        },1000)


    }
}








