//type conversion is when we manually convert from one type to another
// type coercion is when javascript convert types behind scenes for us

const inputYear = '1991';
//to do operation we need to use it as integer
console.log(inputYear + 18); // 199118 with an operation "+" only will be concatenation, but if we do "-" it will apply a substraction

//to do the conversion
//we use the function "Number"
const inputYear2 = '1992';
console.log(Number(inputYear2) + 8); //so we can apply a addition to the current conversion


//if we try to convert something which is not a number
console.log(Number('Jonas')); //we will get a NaN output, not a number

//opposite
console.log(String(23), 50); //to convert a number into to string if we attach after the come the number value, that will be a number type, bc is out of the String function

//JavaScript can only convert to 3 types, to a number, to string and to a boolean


//TYPE COERCION
//we have here string a number, but type coercion converts the numbers to string, the plus (+) operator will convert numbers to string
console.log('I am ' + 23 + 'Years old');


console.log('23' - '10' - 3); //the minus operator will convert string to numbers, this will be give us output 10

console.log('23' + '10' + 3); //output 23103
//concatenation 

//with mutiply will conver to numbers the string

console.log('24' * '3'); //output 72
//same for divide "/"


let n = '1' + 1; //11
n = n - 1;  //10 - 1
console.log(n); //10


console.log(2 + 3 + 4 + '5'); //output 95
//numbers was added to get 9 then the nine was joined to 5

console.log('10' - '4' - '3' - 2 + '5'); // 15







//true and false values
// 5 falsy values:
// 0, '', undefined, null, Nan
//this values will be converted to false when we attemp to covert it to a boolean

//anything else will be convert to true value

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //empty object {} true
console.log(Boolean('')); //false


const money = 0;

if (money) { //JS try to coerce any value into a boolean, so that the value of money is zero and is take it as a falsy
    console.log("Dont spend it all"); //if money value is true  will print this
} else {
    console.log("You should get a job"); //if is false, this
}

let height; //is undefined because is not have a value
if (height) {
    console.log("Yay , Heigh is defined");
} else {
    console.log("Heigh is UNdefined");
}


