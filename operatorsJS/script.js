//DataTypes
let js = 'amazing';
//if (js === 'amazing') alert('Operators %');


const now = 2037;
const ageJonas = now - 1990;
const ageSarahi = now - 2018;
console.log(ageJonas, ageSarahi);

//we can use comas to concatenate the output
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2x2x2

const firstName = 'Jonas';
const lastName = 'Smith';

console.log(firstName + ' ' + lastName);

//let x = 10 + 5;
//x += 10; // x = x + 10;
//x *= 4; // x= x* 4 = 100
//x++;
//x--;
//x--;
//console.log(x); //should 25

//comparison operators
//output true
console.log(ageJonas > ageSarahi);
//< , >, >=,<=
console.log(ageSarahi >= 18);

const isFullAge = ageSarahi >= 18;
console.log(now - 1991 > now - 2018);

//order of operator precedence
//console.log(25 - 10 - 5);//left to right

let x, y;
x = y = 25 - 10 - 5;// asignment is after
console.log(x, y); //should 10

const averageAge = (ageJonas + ageSarahi) / 2; //parentesis highter precedence
console.log(ageJonas, ageSarahi, averageAge);

let mexicoPopulation = 127000000;
console.log(mexicoPopulation);
console.log("half population mexico: " + mexicoPopulation / 2);
mexicoPopulation++;
console.log(mexicoPopulation + 1);

let finlandPopulation = 6000000;
console.log(mexicoPopulation >= finlandPopulation);

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

console.log(description);







