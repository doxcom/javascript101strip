
/*
console.log(me); //var is allowed to access
console.log(job);// is not allowed to access
console.log(year);//is not allowed to access

var me = 'aldo';
let job = 'programmer';
const year = 1990;

//This keyword

console.log(this);

const calcAge = function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
}

calcAge(1991);
*/

const jonas = {
    firstName: 'Aldo',
    year: 1991,
    calcAge: function(){
        console.log(this);
        console.log(2037-this.year);
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();

