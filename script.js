const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("min");
const secondsEl = document.getElementById("sec");


function countdown(){
    const chsDate= new Date("25 Dec 2020");
    const currentDate=new Date();

    const seconds = (chsDate - currentDate) / 1000;

    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const mins = Math.floor(seconds / 60) % 60;
    const mseconds = Math.floor(seconds) % 60;
    // console.log(seconds)

    daysEl.innerHTML=formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML=formatTime(mins);
    secondsEl.innerHTML=formatTime(mseconds);
}
function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

//initial call
countdown();

setInterval(countdown,1000);