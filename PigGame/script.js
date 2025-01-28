//we will use strict mode in all scripts
//control s use prettier to format the code
'use strict';

//selecting elements
// . dot is for selecting a class
// # hash is for selecting an id or getElementById

const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');


const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

btnNew.addEventListener('click', function(){
    window.location.reload(); //https://sentry.io/answers/how-do-i-refresh-a-page-using-javascript/
    
});

//set conditions for initial score

score0El.textContent =0;
score1El.textContent =0;
diceEl.classList.add('hidden');


const scores = [0,0]; //the score of number 1 will be in the position 0 and 2nd player will be  position 1

let currentScore = 0;
let activePlayer = 0; //player number 1 is 0
let playing = true;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    //switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
   player0Element.classList.toggle('player--active');
   player1Element.classList.toggle('player--active');
}


//Rolling dice funcionality

btnRoll.addEventListener('click', function(){
    if(playing){
    //generating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //display dice

    diceEl.classList.remove('hidden');
   diceEl.src=`dice-${dice}.png`;

    //check rolled 1: if true, else switch next player
    if(dice !==1){
      currentScore = currentScore + dice;
     document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
      switchPlayer();
    }
  }
});


btnHold.addEventListener('click',function(){
    if(playing){
    //1.- add current score to active players score
   scores[activePlayer] += currentScore;  //hold the score
   document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //2.-check if player score is >=100
    if(scores[activePlayer]>=20){
        playing = false;
        diceEl.classList.add('hidden');
        //finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');

    }else{
      //switch to next player
      switchPlayer();
    }
  }
    
})