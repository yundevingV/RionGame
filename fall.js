window.addEventListener("keydown", createFallKeyboard, false);

function createFallKeyboard(e) {
    switch(e.keyCode) {
        case 13 :
            createFallTime = 0
            setInterval(function(){
            console.log(createFallTime)
            createFallTime+=1


            if(createFallTime >4){
            if (createFallTime % 20 == 5){                
                Fall = new createFall(Math.random() * 700,0,50,40)
                Fall.draw()
                Fall2 = new createFall(Math.random() * 700,0,50,40)
                Fall2.draw()
            }
                else {  
                    Fall.y +=100
                    ctx.clearRect(Fall.x,Fall.y-100,50,40)
                    Fall.draw()
                    
                    let collisionX = (Fall.x+Fall.width) -Rion.x
                    let collisionY = (Fall.y+Fall.height) - Rion.y -100
                    
                    if (((0 < collisionX) && (collisionX <Rion.width+Fall.width )) && ((0 < collisionY) && (collisionY <Rion.height + Fall.height))){
                        score-=100
                        console.log(score)
                        Fall.x = 999
                        Fall.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                    Fall2.y +=250
                    ctx.clearRect(Fall2.x,Fall2.y-250,50,40)
                    Fall2.draw()
                    
                    let collisionX2 = (Fall2.x+Fall2.width) -Rion.x
                    let collisionY2 = (Fall2.y+Fall2.height) - Rion.y -250
                    
                    if (((0 < collisionX2) && (collisionX2 <Rion.width+Fall2.width )) && ((0 < collisionY2) && (collisionY2 <Rion.height + Fall2.height))){
                        score-=100
                        console.log(score)
                        Fall2.x = 999
                        Fall2.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                }  
            }
            },400)}}

function createFallKeyboard(e) {
    switch(e.keyCode) {
        case 13 :
            createFallTime = 0
            setInterval(function(){



            if(createFallTime >=9){
            if (createFallTime % 20 == 10){                
                Fall1 = new createFall(Math.random() * 700,0,50,40)
                Fall1.draw()
                Fall12 = new createFall(Math.random() * 700,0,50,40)
                Fall12.draw()
            }
                else {  
                    Fall1.y +=100
                    ctx.clearRect(Fall1.x,Fall1.y-100,50,40)
                    Fall1.draw()
                    
                    let collisionX = (Fall1.x+Fall1.width) -Rion.x
                    let collisionY = (Fall1.y+Fall1.height) - Rion.y -100
                    
                    if (((0 < collisionX) && (collisionX <Rion.width+Fall1.width )) && ((0 < collisionY) && (collisionY <Rion.height + Fall1.height))){
                        score-=100
                        console.log(score)
                        Fall1.x = 999
                        Fall1.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                    Fall12.y +=250
                    ctx.clearRect(Fall12.x,Fall12.y-250,50,40)
                    Fall12.draw()
                    
                    let collisionX2 = (Fall12.x+Fall12.width) -Rion.x
                    let collisionY2 = (Fall12.y+Fall12.height) - Rion.y -250
                    
                    if (((0 < collisionX2) && (collisionX2 <Rion.width+Fall12.width )) && ((0 < collisionY2) && (collisionY2 <Rion.height + Fall12.height))){
                        score-=100
                        console.log(score)
                        Fall12.x = 999
                        Fall12.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                }  
            }
            },400)}}


function createFallKeyboard(e) {
    switch(e.keyCode) {
        case 13 :
            createFallTime = 0
            setInterval(function(){

            if(createFallTime >14){
            if (createFallTime % 20 == 15){                
                Fall11 = new createFall(Math.random() * 700,0,50,40)
                Fall11.draw()
                Fall112 = new createFall(Math.random() * 700,0,50,40)
                Fall112.draw()
            }
                else {  
                    Fall11.y +=200
                    ctx.clearRect(Fall11.x,Fall11.y-100,50,40)
                    Fall11.draw()
                    
                    let collisionX = (Fall11.x+Fall11.width) -Rion.x
                    let collisionY = (Fall11.y+Fall11.height) - Rion.y -200
                    
                    if (((0 < collisionX) && (collisionX <Rion.width+Fall11.width )) && ((0 < collisionY) && (collisionY <Rion.height + Fall11.height))){
                        score-=100
                        console.log(score)
                        Fall11.x = 999
                        Fall11.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                    Fall112.y +=250
                    ctx.clearRect(Fall112.x,Fall112.y-250,50,40)
                    Fall112.draw()
                    
                    let collisionX2 = (Fall112.x+Fall112.width) -Rion.x
                    let collisionY2 = (Fall112.y+Fall112.height) - Rion.y -250
                    
                    if (((0 < collisionX2) && (collisionX2 <Rion.width+Fall112.width )) && ((0 < collisionY2) && (collisionY2 <Rion.height + Fall112.height))){
                        score-=100
                        console.log(score)
                        Fall112.x = 999
                        Fall112.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                }  
            }
            },400)}}
function createFallKeyboard(e) {
    switch(e.keyCode) {
        case 13 :
            createFallTime = 0
            setInterval(function(){
            console.log(createFallTime)
            createFallTime+=1


            if(createFallTime >19){
            if (createFallTime % 20 == 0){                
                Fall111 = new createFall(Math.random() * 700,0,50,40)
                Fall111.draw()
                Fall1112 = new createFall(Math.random() * 700,0,50,40)
                Fall1112.draw()
            }
                else {  
                    Fall111.y +=50
                    ctx.clearRect(Fall111.x,Fall111.y-50,50,40)
                    Fall111.draw()
                    
                    let collisionX = (Fall111.x+Fall111.width) -Rion.x
                    let collisionY = (Fall111.y+Fall111.height) - Rion.y -50
                    
                    if (((0 < collisionX) && (collisionX <Rion.width+Fall111.width )) && ((0 < collisionY) && (collisionY <Rion.height + Fall111.height))){
                        score-=100
                        console.log(score)
                        Fall111.x = 999
                        Fall111.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                    Fall1112.y +=250
                    ctx.clearRect(Fall1112.x,Fall1112.y-250,50,40)
                    Fall1112.draw()
                    
                    let collisionX2 = (Fall1112.x+Fall1112.width) -Rion.x
                    let collisionY2 = (Fall1112.y+Fall1112.height) - Rion.y -250
                    
                    if (((0 < collisionX2) && (collisionX2 <Rion.width+Fall1112.width )) && ((0 < collisionY2) && (collisionY2 <Rion.height + Fall1112.height))){
                        score-=100
                        console.log(score)
                        Fall1112.x = 999
                        Fall1112.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }
                    }  
                }  
            }
            },400)}}