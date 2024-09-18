// commas reverse `

//console.log("loops")


for (let rep = 1; rep <= 10; rep++) {
    //with template
    console.log(`Lifting weights repetition ${rep} o/`);
}

//loop trough arrays



const jonasArray = [
    'Jonas',
    'Smith',
    2024 - 1990,
    'teacher',
    ['Visio', 'Strats', 'Tyler'],
    'Mexico'
];


const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i])

    //Filling types array
    //types[i] = typeof jonasArray[i];

    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
console.log('---ONLY STRINGS')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---BREAK WITH NUMBER')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

//backwards array

const jonasArray2 = [
    'Jonas',
    'Smith',
    2024 - 1990,
    'teacher',
    ['Visio', 'Strats', 'Tyler']
];


for (let i = jonasArray2.length - 1; i >= 0; i--) {
    console.log("revered array -->", i, jonasArray2[i]);
}

//nested loops

for (let excercise = 1; excercise < 4; excercise++) {
    console.log(`---------Starting excercise ${excercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Excercise ${excercise}: Lifting weight repetition ${rep} `);
    }
}

//While Loop
let repwhile = 1;
while (repwhile <= 10) {
    console.log("WHILE loop", repwhile);
    repwhile++;
}

//samples where is not depending on a counter

//rolling a dice until find 6

let dice = Math.trunc(Math.random() * 6) + 1;//will create a number between 0 and 1 and multiply by 6, a decimal number
//math trunc will chunk to integer, the +1 will make sure to complement the random output if this is 0
//console.log(dice);

while (dice !== 6) {
    console.log("You rolled a ", dice);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("loop is about to end..");
}
