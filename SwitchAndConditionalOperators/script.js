//Strict mode on the begging on your script, to write secure code
//to avoid accidentall errors in code

'use strict';

const day = 'wednesday';

switch (day) {

    case 'monday':
        console.log("Plan course study");
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log("Prepare music for gig");
        break;

    case 'wednesday':
    case 'thursday':
        console.log("play on stage on bar");
        break;
    case 'friday':
        console.log("go to shop for market")
        break;

    case 'saturday':
    case 'sunday':
        console.log("travel and rest");
        break;
    default:
        console.log("not a valid day");
}

const age = 5;
age >= 18 ? console.log('I can drink beer') : console.log("I can drink only water ");

let salary = 100;
const highSalary = salary >= 20000 ? 'High salary' : 'Low salary';

console.log(highSalary);

console.log(`As a Work I Have ${salary >= 20000 ? 'High salary' : 'Low salary'}`);

//the template use `  back quote, `${}`


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);



//Strict mode practice
//strict mode also prevent to use reserved words
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can Drive");