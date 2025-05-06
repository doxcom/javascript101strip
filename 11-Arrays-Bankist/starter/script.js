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

const account5 = {
  owner: 'Jorge Aldo',
  movements: [182530, 35848000, 900, 150, 90],
  interestRate: 0.4,
  pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

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


const displayMovements = function (movements, sort = false){

  containerMovements.innerHTML=''; //clear the static elements 

const movs = sort ? movements.slice().sort((a,b)=> a - b) : movements;

  movs.forEach(function(mov,i) {
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

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent=`${acc.balance} €`;
};

const calcDisplaySummary = function(acc){
  const incomes = acc.movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${Math.abs(incomes)}€`;

const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
      labelSumOut.textContent =`${Math.abs(out)}€`;

const interest = acc.movements
   .filter(mov => mov > 0)
   .map(deposit => (deposit * acc.interestRate) /100)
   .filter((int, i, arr) => {
    return int >= 1;
   })
   .reduce((acc, int) => acc + int, 0);
   labelSumInterest.textContent = `${interest}€`;
  };

//displayMovements(account1.movements);

const createUsernames = function(accs){

  accs.forEach(function(acc){
   acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
};
createUsernames(accounts);
console.log(accounts); //account details with username added

const updateUI = function(acc){
    //display movements
    displayMovements(currentAccount.movements);

    //display balance
    calcDisplayBalance(currentAccount);

    //display summaryy
    calcDisplaySummary(currentAccount);
}


//Event Handler
let currentAccount;

btnLogin.addEventListener('click', function(e){
  e.preventDefault();//prevent the form from submitting
 //  console.log('LOGIN');
  
 currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value); //compare object user field on the form

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    //display UI welcome message
    labelWelcome.textContent = `Welcome back, ${
    currentAccount.owner.split(' ')[0]
    }`;
    //containerApp.

    containerApp.style.opacity = 100;
    
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    
    inputLoginPin.blur(); //it loose the focus on this field
    
    updateUI(currentAccount);
  }

});

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
   inputTransferAmount.value = inputTransferTo.value = '';
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username){
   console.log('Transfer Valid');
   //doing the transfer 
   currentAccount.movements.push(-amount);
   receiverAcc.movements.push(amount);

   updateUI(currentAccount);
  }
});


//loan feature

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
//1.0 equals to %10
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 &&  currentAccount.movements.some(mov => mov >= amount * 0.1)){
// add movement
currentAccount.movements.push(amount);

//update ui

updateUI(currentAccount)
  }
  //clear input values
inputLoanAmount.value = '';
})



btnClose.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Deleted Account');


  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
    
    //get index from the array 0,1,2,3...
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    
    //Delete account
    accounts.splice(index, 1);
  
    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//sort
let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/*
const user = 'Steven Thomas Williams'; //we want to get STW 
const username = user.toLowerCase().split(' ').map(
  function(name){
    return name[0]; //s,t,w
  }
).join(''); //stw  

console.log(username);
*/


                     




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


const deposits = movements.filter(function(mov){
  
  return mov > 0;
});
/*
console.log(movements);
console.log(deposits); //without negatives numbers


console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov <0)
console.log(lastWithdrawal);


//find index
const latestLargeMovementIndex = movements.findLastIndex(mov=>Math.abs(mov)>2000);

console.log(latestLargeMovementIndex);

*/
console.log(movements);

//equality
console.log(movements.includes(-130));

//condition

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

//every 

console.log(movements.every(mov => mov >0));


//nested array

const arr =[[1,2,3], [4,5,6], 7,8];

console.log("nested array in one big array: " + arr.flat()); //  1,2,3,4,5,6,7,8

const arrDeep =[[[1,2],3], [4,[5,6]], 7,8];
console.log(arrDeep.flat(2)); //works with deep level with a number as a parameter (2)
/*
const accountMovements = accounts.map(acc => acc.movements)
console.log(accountMovements);

const allMovements = accountMovements.flat();
console.log(allMovements);

const overalBalance = allMovements.reduce((acc,mov)=> acc + mov, 0);
console.log(overalBalance);
*/

//flat
const overalBalance = accounts
  .map(acc=> acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov,0);

  console.log(overalBalance);

  //flatmap for better performance

  const overalBalance2 = accounts
  .flatMap(acc=> acc.movements)
  .reduce((acc, mov) => acc + mov,0);
  console.log(overalBalance2);

  //TEST DATA:

  const breeds =[
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running','fetch', 'swimming'],
  },

  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },

  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },

  {
    breed: 'Husky',
    averageWeight: 36,
    activities: ['running','agility', 'swimming'],
  },

  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },

  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
/*

const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log("husky weight g:" + huskyWeight);

//2.
const dogBothActivities = breeds.find(
  breed => 
    breed.activities.includes('fetch') && breed.activities.includes('running')).breed;
  console.log(dogBothActivities);

  //3.

  const allActivities = breeds.flatMap(breed => breed.activities);
  console.log(allActivities);

  //4 unique activities

  const uniqueActivities = [...new Set(allActivities)];
  console.log(uniqueActivities);

  
//strings
  const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
  console.log(owners.sort());
  console.log("owners sorted: "+ owners);

  //numbers

  console.log(movements);

  //return <0, A,B
  //return >0 B, A
  /*
  movements.sort((a,b) =>{
    if(a>b)
      return 1;
    if(b>a)
      return -1;
  });*/
/*
  ///another way
movements.sort((a,b) => a -b);
  console.log(movements);//sorted correctly


  //descending

  movements.sort((a,b)=>{

    if(a > b) return -1;
    if( a< b) return 1;
  });

  console.log("descendingg: "+ movements);

*/

  //ARRAY grouping

  console.log(movements);

  const groupedMovements = Object.groupBy(movements, movement =>
    movement > 0 ? 'deposits' : 'withdrawals'
  );

  console.log(groupedMovements);

  const groupedByActivity = Object.groupBy(accounts, account => {
      const movementCount = account.movements.length;
    
      if(movementCount >= 8) return 'very active';
      if(movementCount >= 4) return 'active';
      if(movementCount >= 1) return 'moderate';

      return 'inactive';
    });

    console.log( groupedByActivity);

    const groupedAccounts = Object.groupBy(accounts, account => account.type);
    console.log(groupedAccounts);




//Common Arrays

const arr3 =[1,2,3,4,5,6,7];
console.log([1,2,3,4,5,6,7]);

//array constructor function


const x = new Array(7); 
console.log(x); // array with 7 empty elements

x.fill(1); //fill array full of 1's , we can indicate from where to start (1,3) on the 3 for example
console.log(x);

//we can mutate existing arrays
//filling with value "23"
arr3.fill(23,2,6);//from position 2 to the 6
console.log(arr3);


//array constructor with from method
//
const y =Array.from({length: 7}, () => 1);
console.log(y);// 1,1,1,1,1,1,1


const z = Array.from({length: 7},(cur,i) => i + 1);
console.log(z);


