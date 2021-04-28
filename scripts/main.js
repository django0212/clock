console.clear()
// only change code below this line

var second = document.getElementById("second");
var min = document.getElementById("minute");
var hrs = document.getElementById("hour");

let date = new Date();
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();

var secAng = seconds * 6;
var minAng = minutes * 6;
var secs = seconds;
var minuts = minutes;
var hrAng = hours * 30 + (minuts/12);

function draw() {   
    second.style.transform = `rotate(${secAng}deg)`;
    secs ++;
    min.style.transform = `rotate(${minAng}deg)`;
    minuts ++;
    hrs.style.transform = `rotate(${hrAng}deg)`;
    secAng += 6;

    if (secs > 59) {
        secs = 0;
        minAng += 6;
        hrAng += 0.5;
    }
}

setInterval(draw, 1000);
