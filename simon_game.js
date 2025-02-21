let gameseq = [];
let userseq = [];
let btns= ["yellow","red","purple","green"];
let high_Score = 0;

let started = false;
let level = 0;
let p = document.querySelector('p');
let h3 = document.querySelector('h3');
//level 1
document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("game started");
        started = true;
        levelup();
    }
     
    
});

function repeat(){
    document.addEventListener("keypress",function(){
        //p.innerText = "Press any key to start the game";
        level = 0;
        started = false;
        gameseq = [];
        userseq = [];
        if(started == false)
        {
            console.log("game started");
            started = true;
            levelup();
        }
         
        
    });
}
//level 2

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");

},200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function()
{
    btn.classList.remove("userflash");

},200);
}

function levelup()
{
    userseq = [];
    level++;
    p.innerText = `level ${level}`;
    let randomindex = Math.floor(Math.random()*3); 
    let randomcolor = btns[randomindex] 
    let ranbtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomindex);
    // console.log(randomcolor);
    // console.log(ranbtn);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(ranbtn);

}
function checkans(idx){
    // let idx = level-1;
    if(userseq[idx] === gameseq[idx])
    {
        //console.log("same value")
        if(userseq.length == gameseq.length)
        {
            setTimeout(levelup,1000)
        }
    }
    else{
        p.innerHTML = `Game over... Your score is <b>${level}</b> press any to start`;
        document.querySelector('body').style.backgroundColor = "red";
        
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },150);
        // h3.innerText = `your score is ${level}`;
        // started = false;
        if(level>high_Score)
        {
            high_Score = level;
            h3.innerText = `High Score is ${high_Score}`;
        }
        repeat();
        // level = 0; 
    }
}
   
function btnpress()
{
    // let btn = this;
    // btnflash(btn);
    //console.log(this);
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    //console.log(usercolor);
   checkans(userseq.length - 1);
}
 let allbtns = document.querySelectorAll(".btn");

 for(btn of allbtns){
    btn.addEventListener("click",btnpress);
 }

 //matching color