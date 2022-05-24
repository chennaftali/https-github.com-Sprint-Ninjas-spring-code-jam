
const eyes = document.querySelector(".profile__hero-image-eyes");
function startBlinking() {
    setInterval(blinking,5500);
 }
 
 function blinking() {
   
    eyes.style.opacity = 1;
     
       setTimeout(function(){
        eyes.style.opacity = 0;
       },200);
 }
 startBlinking();