//////Background Image///////
const BKIMG = new Image();
BKIMG.src = "img/bg.png";
////////////////////////////
const LIFE_IMG = new Image();
LIFE_IMG.src = "img/life.png";
//////////////////////////////
const High_IMG = new Image();
High_IMG.src = "img/HighScore.png";

const SCORE_IMG = new Image();
SCORE_IMG.src = "img/score.png";
//////sound//////
let count = 0;
let countb = 0;

window.addEventListener("load" , () =>{
    document.getElementById("audio").volume=0.6;
    document.getElementById("audio").play();
})

mute = document.getElementById("mute")

mute.onclick = function(){
    count ++;
    if((count%2)==0){
        document.getElementById("audio").muted = false}
    else{
        document.getElementById("audio").muted = true;
    }}


    bouncing = document.getElementById("bouncing")

    bouncing.onclick = function(){
        countb ++;
        if((countb%2)==0){
            document.getElementById("ball").muted = false}
        else{
            document.getElementById("ball").muted = true;
        }}