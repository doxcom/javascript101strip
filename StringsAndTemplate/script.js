
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