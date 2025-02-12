'use strict';

const restaurant = {

    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze Italy',
    categories:['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu:['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu:['Pizza','Pasta','Risotto'],
};
/*
const [first, , second] = restaurant.categories;
console.log(first,second);*/

const arr = [1,2,...[3,4]];//spread operator "..." on right side of =
//rest, because of LEFT side of = ,"..." symbol take rest of elements as a pattern

const [a,b,... others] = [1,2,3,4,5];//

console.log(a,b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu,];

console.log(pizza,risotto,otherFood);


//objects

//Rest syntax take multiple numbers to pack into one array( called "numbers")
//with spread operator "..."


const add = function(...numbers){
    let sum=0;
    for(let i = 0; i<numbers.length; i++) sum+=numbers[i];
    console.log(sum);
}

add(2,4);
add(2,4,5,6,3,7,6);
add(5,3,6,8,90,200);


//short-circuiting
//will return true value between n values

console.log(3 || 'Jonas'); //3
console.log('' || 'Jonas'); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log('---AND OPERATOR-----');

//if first of element is false will output first, if not will output second

console.log(0 && 'Jonas'); //0
console.log(7 && 'Jonas'); //Jonas


//Logical Assignment operators

const rest1 ={
    name: 'Capri',
    numGuests: 20,
};

const rest2 ={
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;

//OR assignm operator

//rest1.numGuests ||= 10;
//rest2.numGuests ||= 10;


//nullish assignment operator

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


console.log(rest1);
console.log(rest2);


//Challenge

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',

    players:[
        [
        'Neuer',
        'Parbard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewadonski',
    ],
    
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
       'hazard',
       'Brandt',
       'Sancho',
       'Gotze',
    ],
],

score: '4:0',
scored:['Lewadonski', 'Gnarby', 'Lewadonski','Hummels'],
date: 'Nov 9th, 2037',
odd:{
  team1: 1.33,
  x:3.25,
  team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1,players2);