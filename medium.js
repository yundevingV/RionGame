window.addEventListener("keydown", createMediumKeyboard, false);


createMediumTime = 0
function createMediumKeyboard(e) {

setInterval(function(){
    switch(e.keyCode) {
        case 13: 
    createMediumTime+=1
    if (createMediumTime > 7 ){
        if (createMediumTime %20 == 8){                
            Medium = new createMedium(Math.random() * 700,0,30,20)
            Medium.draw()
            Medium1 = new createMedium(Math.random() * 700,0,30,20)
            Medium1.draw()
            Medium2 = new createMedium(Math.random() * 700,0,30,20)
            Medium2.draw()
            Medium3 = new createMedium(Math.random() * 700,0,30,20)
            Medium3.draw()
        }
            else {  
                Medium.y +=150
                ctx.clearRect(Medium.x,Medium.y-150,30,20)
                Medium.draw()
                Medium1.y +=150
                ctx.clearRect(Medium1.x,Medium1.y-150,30,20)
                Medium1.draw()            
                Medium2.y +=150
                ctx.clearRect(Medium2.x,Medium2.y-150,30,20)
                Medium2.draw()
        
                Medium3.y +=150
                ctx.clearRect(Medium3.x,Medium3.y-150,30,20)
                Medium3.draw()
                let collisionX = (Medium.x+Medium.width) -Rion.x
                let collisionY = (Medium.y+Medium.height) - Rion.y -150
                let collisionX1 = (Medium1.x+Medium1.width) -Rion.x
                let collisionY1 = (Medium1.y+Medium1.height) - Rion.y -150
                let collisionX2 = (Medium2.x+Medium2.width) -Rion.x
                let collisionY2 = (Medium2.y+Medium2.height) - Rion.y -150
                let collisionX3 = (Medium3.x+Medium3.width) -Rion.x
                let collisionY3 = (Medium3.y+Medium3.height) - Rion.y -150
                if (((0 < collisionX) && (collisionX <Rion.width+Medium.width )) && ((0 < collisionY) && (collisionY <Rion.height + Medium.height))){
                    score+=150
                    console.log(score)
                    Medium.x = 999
                    Medium.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                    }
                }  
                if (((0 < collisionX1) && (collisionX1 <Rion.width+Medium1.width )) && ((0 < collisionY1) && (collisionY1 <Rion.height + Medium1.height))){
                    score+=150
                    console.log(score)
                    Medium1.x = 999
                    Medium1.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                        
                    }
                }  
                if (((0 < collisionX2) && (collisionX2 <Rion.width+Medium2.width )) && ((0 < collisionY2) && (collisionY2 <Rion.height + Medium2.height))){
                    score+=150
                    console.log(score)
                    Medium2.x = 999
                    Medium2.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                        
                    }
                }  
                if (((0 < collisionX3) && (collisionX3 <Rion.width+Medium3.width )) && ((0 < collisionY3) && (collisionY3 <Rion.height + Medium3.height))){
                    score+=150
                    console.log(score)
                    Medium3.x = 999
                    Medium3.y = 999
                    if(score >= 2000)
                    {
                        alert('Clear')
                        
                    }
                }  
        
            }
        }

        if (createMediumTime > 14 ){

        if (createMediumTime %20 ==15){                
            Medium4 = new createMedium(Math.random() * 700,0,30,20)
            Medium4.draw()
            Medium5 = new createMedium(Math.random() * 700,0,30,20)
            Medium5.draw()
            Medium6 = new createMedium(Math.random() * 700,0,30,20)
            Medium6.draw()
        }
        else {  
            Medium4.y +=150
            ctx.clearRect(Medium4.x,Medium4.y-150,30,20)
            Medium4.draw()
            Medium5.y +=150
            ctx.clearRect(Medium5.x,Medium5.y-150,30,20)
            Medium5.draw()            
            Medium6.y +=150
            ctx.clearRect(Medium6.x,Medium6.y-150,30,20)
            Medium6.draw()
        
            
            let collisionX4 = (Medium4.x+Medium4.width) -Rion.x
            let collisionY4 = (Medium4.y+Medium4.height) - Rion.y -150
            let collisionX5 = (Medium5.x+Medium5.width) -Rion.x
            let collisionY5 = (Medium5.y+Medium5.height) - Rion.y -150
            let collisionX6 = (Medium6.x+Medium6.width) -Rion.x
            let collisionY6 = (Medium6.y+Medium6.height) - Rion.y -150
            
            if (((0 < collisionX4) && (collisionX4 <Rion.width+Medium4.width )) && ((0 < collisionY4) && (collisionY4 <Rion.height + Medium4.height))){
                score+=150
                console.log(score)
                Medium4.x = 999
                Medium4.y = 999
                if(score >= 2000)
                {
                    alert('Clear')
                }
            }  
            if (((0 < collisionX5) && (collisionX5 <Rion.width+Medium5.width )) && ((0 < collisionY5) && (collisionY5 <Rion.height + Medium5.height))){
                score+=150
                console.log(score)
                Medium5.x = 999
                Medium5.y = 999
                if(score >= 2000)
                {
                    alert('Clear')
                    
                }
            }  
            if (((0 < collisionX6) && (collisionX6 <Rion.width+Medium6.width )) && ((0 < collisionY6) && (collisionY6 <Rion.height + Medium6.height))){
                score+=150
                console.log(score)
                Medium6.x = 999
                Medium6.y = 999
                if(score >= 2000)
                {
                    alert('Clear')
                    
                }
            }  
        }  
    }
}
},400)}