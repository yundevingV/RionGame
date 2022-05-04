

// 장애물 생성에 대한 키보드 이벤트
window.addEventListener("keydown", createClearKeyboard, false);


// 엔터를 칠경우 게임이 시작됨과 동시에 장애물 생성
function createClearKeyboard(e) {
    switch(e.keyCode) {
        case 13 :
            createClearTime = 0


            setInterval(function(){
            createClearTime+=1
            if (createClearTime %20 == 1){                
                Clear = new createClear(Math.random() * 700,0,100,30)
                Clear.draw()
               
            }
                else {  
                    a = Math.random()*200
                    Clear.y +=a
                    ctx.clearRect(Clear.x,Clear.y-a,100,30)
                    Clear.draw()
                    let collisionX = (Clear.x+Clear.width) -Rion.x
                    let collisionY = (Clear.y+Clear.height) - Rion.y -a
                  
                    if (((0 < collisionX) && (collisionX <Rion.width+Clear.width )) && ((0 < collisionY) && (collisionY <Rion.height + Clear.height))){
                        score = 0
                        console.log(score)
                        Clear.x = 999
                        Clear.y = 999
                        if(score >= 2000)
                        {
                            alert('Clear')
                        }

                    }
                }
        },1000)
       
        
        


    }
}








