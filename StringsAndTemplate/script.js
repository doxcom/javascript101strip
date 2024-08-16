
const firstName = 'Aldo';
const job = 'programmer';
const birthYear = 1990;
const currentYear = 2037;


const aldo = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';

console.log(aldo);

//symbol ´´ is used to create a template string

//we can call a variable with ${} template
const aldoNew = `I'am ${firstName} a ${currentYear - birthYear} year old ${job}!`;
console.log(aldoNew);

console.log(`Just a regular String..`);

//multiline string
//\n new line should be created
console.log('String with \n\
    multiple \n\
    lines')


console.log(`String
multiple
lines`);

//IF ELse Statements

const age = 15;
// if var contains comparator value it will be assigned as a boolean variable

const isOldEnough = age >= 18; //should b true

if (isOldEnough) {
    console.log('Sarah can start driving license 🚗');
} else {

    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😁`);
}

const birthYear_ = 1991;

let century;
if (birthYear_ <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(`Century is : ${century}`);
