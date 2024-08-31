let gameSeq =[];
let userSeq=[];

let started = false;
let level = 0;
let highScore = 0;

let btns = ["yellow","red","blue","green"];

document.addEventListener("keypress",function(){
    if(started == false)
    {
        levelUp();
        started = true;
    }
});




function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function () {
        btn.classList.remove("user-flash");
    }, 100);
}

function levelUp() {
    userSeq = [];
    level += 1;
    document.querySelector('h2').innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`)

    gameSeq.push(ranColor);
    gameFlash(ranBtn);
}

function checkAns(idx){
// let idx = level-1;
if (userSeq[idx]==gameSeq[idx])
{
    if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,1000);
    }
}else{
    // body.classList.add("red");
    console.log("Game Over");
    document.querySelector('h2').innerHTML = `Game Over ! <br> Your Score:${level} <br> Press any Key to Restart`;
    if (started == true)
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";

    },150);
    if(highScore < level)
    {
        highScore = level;
    }
    document.querySelector("h3").innerText = "High Score : " + highScore;

    reSet();
}
}

function btnPress(){
let btn = this;
userFlash(btn);

userColor = btn.getAttribute("id");
userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

 let allBtns = document.querySelectorAll(".btn")
 for (btn of allBtns){
    btn.addEventListener("click",btnPress);
 }


 function reSet(){
    started = false;
    gameSeq = [];
    userSeq= [];
    level = 0;
 }