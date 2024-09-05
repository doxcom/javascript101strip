//variables examples


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



function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge1(1990));

//anonymous function, but need to store in a var
const calcAge2 = function (birthYearB) {
    return 2030 - birthYearB
}
//note: functions can be called before to be declare in code

