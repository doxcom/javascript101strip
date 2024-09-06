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
*/


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





