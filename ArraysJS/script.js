//Challenge Array

//  `

//always declare a function inside a variable
const calcTip = function (bill) {

    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];


const totals = [bills[0] + tips[0], bills[1] + bills[1], bills[2] + bills[2]];

console.log(bills, tips, totals);

//OBJECTS (Data Structure)

//with key:value pair ,note: objects is more for unstructured data
const jonas = { firstName: 'Jonas', lastName: 'Bojack', age: 27, job: 'teacher', friends: ['Tom', 'Jerry', 'Michael'] }; //5 properties ,one by key

//how to retrieve and change object


console.log(jonas);

console.log(jonas.lastName); //directly

console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]); //you can concatenate, to compute the output
console.log(jonas['last' + nameKey]);

/*
const input = prompt('What do you want to know about Jonas? Choose: firstName, lastName, age, job, and friends');


if (jonas[input]) {
    console.log(jonas[input]);//with this expression we can compute
} else {
    console.log('Wrong Request! Choose: firstName, lastName, age, job, and friends')
}*/

//to add into object:
jonas.location = 'Poland';
jonas['twitter'] = '@jonast';
console.log(jonas);

//Challenge 

//Jonas has 3 friends, and his best friend is called Michael

//jonas, 3, Michael

console.log(jonas.firstName, 'has', jonas.friends.length, ' friends and his best friend is called ', jonas.friends[2]);

//other version

console.log(`${jonas.firstName} has ${jonas.friends.length} friends and this best friend is called ${jonas.friends[2]}`);

//OBJECT METHODS

const mexican = {
    firstName: 'aldo',
    lastName: 'perez',
    birthYeah: 1990,
    job: 'programmer',
    friends: ['Tom', 'Jerry', 'Michael'],
    hasDriversLicense: true,
    //first example of a function inside an object 
    /*
    calcAge: function (birthYeah) {
        return 2024 - birthYeah  // any function that is attach to an object is called a method
    } */
    calcAge: function () {

        this.age = 2024 - this.birthYeah;
        return this.age;
    },
    getSummary: function () {

    }
};

//console.log(mexican.calcAge(1991));
//another way

//console.log(mexican['calcAge'](1990));

//using "this" inside the function
console.log(mexican.age); //this point to mexican object



//Challenge OBJECT

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI(${mark.bmi})
        is higher than ${john.fullName}'s BMI (${john.bmi})
        `)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI(${john.bmi})
        is higher than ${mark.fullName}'s BMI (${mark.bmi})
        `)
}





