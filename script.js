var time_ele = document.getElementsByClassName("time")[0];
var start_btn = document.getElementById("start");
var lap_btn = document.getElementById("lap");
var stop_btn = document.getElementById("stop");
var reset_btn = document.getElementById("reset");
const lap_section = document.querySelector('.lapping');
var l1 = document.getElementById("lap1");
var l2 = document.getElementById("lap2");
var l3 = document.getElementById("lap3");
var l4 = document.getElementById("lap4");
var l5 = document.getElementById("lap5");
let lap = [];

let seconds = 0;
let interval = null;
let ctr=0;

start_btn.addEventListener("click", start);
lap_btn.addEventListener("click", recordLap);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);


function timer() {
    seconds++;


    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10)
        sec = '0' + sec;

    if(mins < 10)
        mins = '0' + mins;

    if(hrs < 10)
        hrs = '0' + hrs;

    time_ele.innerHTML = `${hrs}:${mins}:${sec}`;
}

function start() {
    if(interval)
    {
        return;
    }

    interval = setInterval(timer, 1000);
}

function recordLap() {
    // ctr++;
    // if(ctr%1>=0)
    //     l1.innerHTML="Lap "+ ctr+ ":  " + time_ele.innerHTML;
    lap.push(time_ele.innerHTML);
    lap_section.innerHTML = lap.map((lap, index) => `Lap ${index + 1}: ${lap}`).join('<br>');


}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    ctr=0;
    lap = [];
    time_ele.innerHTML = "00:00:00";
    lap_section.innerHTML = "";
}