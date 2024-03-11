let level=0;                 // to show the level
let started="false";         // to start the game 
let gameSeq=[];         
let userSeq=[]; 
let highScore=0;

let ashu=document.querySelector('.ashu');
let flag=1;


let body=document.querySelector('body');
let heading3=document.querySelector('h3');
let allbtn=document.querySelectorAll('.child');
let green=document.querySelector('.a');
let blue=document.querySelector('.b');
let red=document.querySelector('.c');
let brown=document.querySelector('.d');
let bts=['a','b','c','d'];
let high=document.createElement('b');

body.appendChild(high); 
function start(){

  if(started=="false"&& flag==1) {                               // it will make sure that keydown will be disables after the game will start.
  ashu.innerText="☠️Player one's turn☠️";
  body.classList.add('man');
  body.classList.remove('girl');
  flag=0;
    started="true";
  levelUp();}

  else if(started=="false"&& flag==0) {                               // it will make sure that keydown will be disables after the game will start.
    ashu.innerText="🌟Player two,s turn🌟";
    body.classList.add('girl');
    body.classList.remove('man')
        flag=1;
      started="true";
    levelUp();}
}


                                                        // putting the start operation so that we can call it again after the game ends.

  document.addEventListener('Onclick',start);
  document.addEventListener('keydown',start);


function setCol(btn){
  btn.classList.add("flash");    //the button will have this class for some period of time
  setTimeout(function(){
    btn.classList.remove("flash");
  },200);
  };



  function checkans(){
    if(userSeq[userSeq.length-1]===gameSeq[userSeq.length-1]){                     //userSeq.length-1 is taken so that we can compare on every click.
      if(gameSeq.length==userSeq.length){                                          // after checking all the elements of the arrays, level will increase.
       setTimeout(levelUp(),900);
      }
    }

    else {
      heading3.innerHTML=`Game over. Your score is:<b> ${count -1}</b>.<br> Press any key to start`;
        if(level==1){
          count==0;
           reset();
        }
        reset();
      }
    }

  function reset(){
    started='false';                           //so that we can start the game again
    level=0;
    if(highScore<count){
    highScore=count;
    }
    count=0;
    gameSeq=[];
    userSeq=[];
  }

  function levelUp(){
    userSeq=[];                             // resetted so that every time user have to insert the whole sequence.
    level++;
    let random= Math.floor(Math.random()*4);         // generating a random number which can be used to select random divs for 
    let randColor=bts[random];
    let iclass=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    heading3.innerText=`Level ${level}`;   
    setCol(iclass);
 };
 function userFlsh(btn){
  let usercol=btn.getAttribute('id');            // to select the individual id of each element
   userSeq.push(usercol);
   checkans();
 }

let count=0;
function btnClick(){  
   count++;
   if(highScore<=count){
     highScore=count;
   }
   high.innerHTML=`<b>High Score: ${highScore} 🥳</b>`;
   userFlsh(this);  
 };

for(btn of allbtn){
 btn.addEventListener('click',btnClick);
}


