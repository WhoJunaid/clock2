var hourHand =document.querySelector(".hour_hand");
var secoundHand =document.querySelector(".secound_hand");
var minuteHand =document.querySelector(".minute_hand");
setInterval(() => {
var date = new Date();
var hours = date.getHours();
if (hours>12) {
    hours = hours - 12;}else{
        hours=hours
    }
   
let minutes = date.getMinutes(); 
if (minutes<10) {
        minutes = "0" + minutes
        
    } else {
        minutes=minutes
        
    }
var secound = date.getSeconds();
if (secound<10) {
    secound = "0" + secound
    
} else {
    secound=secound
    
}
secoundHand.innerText = `${secound} ${secound} ${secound} ${secound} ${secound} ${secound} ${secound} `;
secoundHand.style.rotate = secound*6+90 +"deg";
hourHand.innerText =`${hours} ${hours} ${hours} ${hours} `;
minuteHand.innerText =`${minutes} ${minutes} ${minutes} ${minutes} ${minutes}`
minuteHand.style.rotate = minutes*6-90 + "deg"
hourHand.style.rotate = hours*30+90 + "deg";
}, 1000);



    