window.addEventListener("keydown", createFallKeyboard, false);

let createBigTime = 0

function createFallKeyboard(e) {
    switch(e.keyCode) {
        case 13 :
            setInterval(function(){
                createBigTime+=1
            if (createBigTime > 9){
                if (createBigTime %20 == 10){                
                    Big = new createBig(Math.random() * 700,0,25,15)
                    Big.draw()
                   
                }
                    else {  
                        Big.y +=250
                        ctx.clearRect(Big.x,Big.y-250,25,15)
                        Big.draw()
                       
                        let collisionX = (Big.x+Big.width) -Rion.x
                        let collisionY = (Big.y+Big.height) - Rion.y -250
                        
                        if (((0 < collisionX) && (collisionX <Rion.width+Big.width )) && ((0 < collisionY) && (collisionY <Rion.height + Big.height))){
                            score+=300
                            console.log(score)
                            Big.x = 999
                            Big.y = 999
                            if(score >= 2000)
                            {
                                alert('Clear')
                            }
                        }  
                    }
                }
                if(createBigTime > 17){
                if (createBigTime % 20 == 18){                
                    Big2 = new createBig(Math.random() * 700,0,25,15)
                    Big2.draw()
                    
                }
                    else {  
                        Big2.y +=250
                        ctx.clearRect(Big2.x,Big2.y-250,25,15)
                        Big2.draw()
                        
                        let collisionX = (Big2.x+Big2.width) -Rion.x
                        let collisionY = (Big2.y+Big2.height) - Rion.y -250
                        
                        if (((0 < collisionX) && (collisionX <Rion.width+Big2.width )) && ((0 < collisionY) && (collisionY <Rion.height + Big2.height))){
                            score+=300
                            console.log(score)
                            Big2.x = 999
                            Big2.y = 999
                            if(score >= 2000)
                            {
                                alert('Clear')
                            }
                        }  
                    }
                
            }},400)}}