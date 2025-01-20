//we will use strict mode in all scripts
//control s use prettier to format the code
'use strict';

/*
document.querySelector('.message').textContent;


document.querySelector('.message').textContent = ' 🎉 Correct Number!';

document.querySelector('.message').textContent;

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;3
*/

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent='No Number Found!';
    }
})


