//we will use strict mode in all scripts
//control s use prettier to format the code
'use strict';

function calcAge(birthYear){ //calcAge function is defined in a global scope bc is on top level code
    const age = 2037 - birthYear;

    function printAge(){
        const output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output);

        if(birthYear >= 1991 && birthYear <= 1996){
            var millenialbool = true;//var variables is in a function level variable
            const str = `Oh , and you are a millenial, ${firstName}`;
            console.log(str);
        }
    }
    console.log(firstName);

    printAge();
 
    return age;
}

//global variable
//that can be output into calcAge
//even if this variable was declared after calcAge function
const firstName = 'Jonas';
calcAge(1991);