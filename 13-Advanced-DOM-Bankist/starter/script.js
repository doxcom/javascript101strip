'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//callback function "=>"
btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Page navigation

//select links

//document.querySelectorAll('.nav__link').forEach
//(function(el){
//  el.addEventListener('click', function(e) {
//    e.preventDefault();
//    const id = this.getAttribute('href');
//    console.log(id);
//    document.querySelector(id).scrollIntoView({
//      behavior: 'smooth' });
//  });
//});


//1.- ADD event listener to common parent element
//2.- Determine what element originated the event

document.querySelector('.nav__links').addEventListener
('click', function(e){
     e.preventDefault();

  //matching strategy

  if(e.target.classList.contains('nav__link')){
     const id = e.target.getAttribute('href');
     console.log(id);
     document.querySelector(id).scrollIntoView({
      behavior: 'smooth'});
  }
});


//selecting all documement
console.log(document);
console.log(document.head);
console.log(document.body);



//selecting elements
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');//this is not keeping live elements on code html
console.log(allSections); //nodelist of 4 sections on the bankist page

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); //live collection, DOm elements are updated here with this get"
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


//creating and inserting elements

//.insertAdjacentHTML


const messagediv = document.createElement('div');//dom object created but no yet on the dom
messagediv.classList.add('cookie-message');
//messagediv.textContent = 'We use cookies for improved funcionality and analytics';
messagediv.innerHTML = 'We use cookies for improved funcionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>'
//inserting on dom
//header.prepend(messagediv);//prepend is the first child of header element
//header.append(messagediv)// append is added in the last part of header(the last child)


//can work with this

header.before(messagediv);
header.after(messagediv); 

//delete element with clic button

document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  messagediv.remove();
})

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //scrolling
  window.scrollTo(s1coords.left, s1coords.top);
});


//need to hover over h1 title
const h1 = document.querySelector('h1');

const alertH1 = function (e){
  alert('addEventListener: Great! you are on heading H1');
};

h1.addEventListener('mouseenter', alertH1);
//setting listener once, to dissappear in 3 seconds
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);




//const h4 = document.querySelector('h4');

//h1.onmouseenter = function(e){
 // alert('onmouseenter: on clic simpler banking part');
//};


// rgb(255,255,255)

const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>  `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function(e){
  console.log('Link');
});

document.querySelector('.nav__links').addEventListener('click', function(e){
  console.log('Links');
});

document.querySelector('.nav').addEventListener('click', function(e){
  console.log('Nav');
});