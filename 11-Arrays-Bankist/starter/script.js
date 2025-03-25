'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements){

  containerMovements.innerHTML=''; //clear the static elements 


  movements.forEach(function(mov,i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

  const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
  <div class="movements__value">${mov}</div>
  </div>
  `;

  containerMovements.insertAdjacentHTML('afterbegin',html);

  });
};

displayMovements(account1.movements);



const user = 'Steven Thomas Williams'; //we want to get STW 
const username = user.toLowerCase().split(' ').map(
  function(name){
    return name[0]; //s,t,w
  }
).join(''); //stw  

console.log(username);




/////////////////////////////////////////////////

// LECTURES



/*

for (const movement of movements){
  if(movement > 0){
    console.log(`You deposited ${movement}`);
  }else{
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//

console.log('---------FOREACH---------');

movements.forEach(function(movementValue,i){
  if(movementValue > 0){
    console.log(`Movement ${i+1}: You deposited ${movementValue}`);
  }else{
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(movementValue)}`);
  }
});

*/

//function is a anonymous function
// with elements inside movementValue variable
// 0: function(200)
//1: function(450)
// every value inside() represents what movementValue variable is holding in that moment when anonymous function is being called
/////////////////////////////////////////////////

/*
let arr =['a','b','c','d','e'];

//it return a new array, doest affect the previous array
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2)); //d ,e
console.log(arr.slice(-1)); //e
console.log(arr.slice(1,-2));


//splice it extracts and deleted the other elemtents, original array lose the extracted part

console.log(arr.splice(2)); // c,d,e
console.log(arr); //original array will print a,b 
//arr.splice(-1) will erase last element of array

//REVERSE

arr =['a','b','c','d','e'];
const arr2= ['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);

//concat

const letters = arr.concat(arr2);
console.log(letters); //abcdefghi

// JOIN

*/

//NEw at method

/*
const arr =[23,,11,64];

console.log("position 0 :"+ arr.at(0)); // -> 23

console.log(arr[arr.length-1]); //64

console.log("last element with -1 index:  "+ arr.at(-1));

//works with strings

console.log('jonas'.at(0)); // j
*/

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
                  //current value. key, the whole map
currencies.forEach(function(value,key,map){
   console.log(`${key}: ${value}`);

})


//now with a SET

const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique); //onyl filter unique values

currenciesUnique.forEach(function(value,value_two,map){
  console.log(`${value}: ${value_two}`);
})

*/
/*

const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);//the first and we want to remove one
  dogsJuliaCorrected.splice(-2);


  console.log(dogsJuliaCorrected);
};

checkDogs([3,5,2,12,7],[4,1,15,8,3]);

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//convert to us dollars

const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov) {
   return mov * eurToUsd;

});

//with arrow function
//const movementsUSD = movements.map(mov => mov * eurToUsd);
/*
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor=[];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

*/