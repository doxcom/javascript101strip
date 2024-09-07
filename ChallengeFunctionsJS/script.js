//variables examples
/* 

function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //apples and oranges will be a number
    return juice;
}

const appleJuice = fruitProcessor(5, 0); //we passed arguments the return of juice value should be added into another variable
console.log(appleJuice);

console.log(fruitProcessor(5, 0)); //this is another way, without storing in a value


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log("Edad Rocio Perez", calcAge1(1967))

function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log("Edad aldo perez", calcAge1(1990));

//console.log(calcAge2)

//anonymous function, but need to store in a var
const calcAge2 = function (birthYearB) {
    return 2024 - birthYearB;
}
//note: functions can be called before to be declare in code+


//ARROW FUNCTION
//const birthYear = 0;
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log("funcion arrow", age3);


const yearsUntilRetirement = (birthYear, firstName) => {

    const age = 2037 - birthYear;
    const retirement = 65 - age;

    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1990, 'Jonas Perez'));
console.log(yearsUntilRetirement(2001, 'Johana'));



function cutFruitPieces(fruit) {

    return fruit * 4;
}


function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and 
    ${orangePieces} pieces of orange.`; //apples and oranges will be a number took it from the const above
    return juice;
}

console.log(fruitProcessor(2, 3));

/////////////////////////////////////////////


const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log("major to zero");
        return `${firstName} retires in ${retirement} years`;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1915, 'John F'));


*/



const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test 1

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins ...');
    }
}

checkWinner(scoreDolphins, scoreKoalas);


//Arrays

const friend1 = 'Mike';
const friend2 = 'Steve';


const friends = ['aldo', 'stevie', 'Manu'];

console.log(friends);

const yearsA = new Array(23123, 3243, 343, 3434);

console.log(yearsA);


console.log(friends[0]); //get the  first position

console.log(friends.length);

//to get the minor element

console.log(friends[friends.length - 1]);

//mutate array

friends[2] = 'Jay';
console.log(friends);

const aldo = ['Aldo', 'Perez', 1990, 'programmer'];
console.log(aldo);

//Array Exercise

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const years = [1990, 1967, 2001, 2006];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);

//BASIC OPERATIONS ARRAYS

const friends2 = ['aldo', 'alfredo', 'jordan'];

const newLength = friends2.push('Mike');// add element in the end

console.log(friends2);

console.log(newLength);

friends2.unshift('Morgan:'); //add element into beggining of array

console.log(friends2);

//remove elements

friends2.pop(); //remove last element of the array
console.log(friends2);

friends2.shift();//remove first elemento of array
console.log(friends2);


console.log(friends2.indexOf('alfredo')); //return a number

console.log(friends2.includes('Ferb')); //return false or true if is on the array


if (friends2.includes('aldo')) {
    console.log('you have a guitar on rehearsal');
}



