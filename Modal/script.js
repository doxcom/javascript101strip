//we will use strict mode in all scripts
//control s use prettier to format the code
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

const openModal= function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);
    //or
    btnCloseModal.addEventListener('click', closeModal);
 //to close emergent window message doing clic outside message and 'x' option
    overlay.addEventListener('click', closeModal);


//for keyboard events


document.addEventListener('keydown', function(event){

    if(event.key==='Escape' && !modal.classList.contains('hidden')) {
        
            closeModal(); //call as a function
        
    }


});