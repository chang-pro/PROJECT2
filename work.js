const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const uw = document.getElementById('uw');
const cw = document.getElementById('cw');
const tie = document.getElementById('ties');
const h2 = document.querySelector('h2');
var userwins = 0;
var computerwin=0;
var ties=0;
let choice='';
 
rock.addEventListener('click', function() {
    choice='rock';
    game();
});
paper.addEventListener('click', function() {
    choice='paper';
game();});
scissors.addEventListener('click', function() {
    choice='scissors'
game();});
console.log(choice);


    //Add Prompt Validation In the Future
function game (){
var computerchoice= Math.floor(Math.random() * 3);

// Convert Number To Choice Rock, Paper, Scissors ETC
if (computerchoice===0){
     computerchoice = 'rock';
}
else if (computerchoice===1) {
    computerchoice='paper';
}
else{
    computerchoice='scissors';
}
// Result Comparing Values

if (computerchoice===choice){
    h2.textContent("It's A Tie");
  ties++;
}
else if(computerchoice=='rock' && choice=='paper') {
h2.textContent='User Won';
userwins++;
}
else if(computerchoice=='paper' && choice=='scissors') {
    h2.textContent='User Won';
    userwins++;
    }
 else if(computerchoice=='scissors' && choice=='rock') {
    h2.textContent='User Won';
    userwins++;
    }
    else{
        h2.textContent='User Lost';
       computerwin++;
    }
   uw.textContent=`users wins = ${userwins} `;
    cw.textContent=`computer wins = ${computerwin}`;
    tie.textContent=`ties = ${ties}`;
}

