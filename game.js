AFRAME.registerComponent("game-play", {  
    init: function () {
      var duration = 120;
      const timerE1 = document.querySelector("#timer");
      this.startTimer(duration,timerE1)
    },
  
    startTimer : function(duration,timerE1){
    console.log("in function")
      setInterval(()=>{
        if(duration>=0){
          minutes = parseInt(duration/60);
          seconds=parseInt(duration%60);
    
          if(minutes <10){
            minutes = "0" + minutes;
          }
    
          if(seconds <10){
            seconds = "0" + seconds;
          }
    
          timerE1.setAttribute("text",{
            value:minutes + ":" + seconds,
          });
    
          duration -= 1;
        }
        // else{
        //   this.gameOver()
        // }      
      },1000)
    },

    // updateScore : function(){
    //   const element = document.querySelector("#score");
    //   var count = element.getAttribute("text").value
    //   let currentScore = parseInt(count)
    //   currentScore += 50
    //   element.setAttribute("text",{
    //     value:currentScore
    //   });
    // },
  
    gameOver : function(){
      var planeE1 = document.querySelector("#bg")
      var element = document.querySelector("#gameovertext")
      element.setAttribute("visible", "true")
      planeE1.setAttribute("dynamic-body", {mass:1})
    }
    
  });
  