//we will use strict mode in all scripts
//control s use prettier to format the code
'use strict';

const x = '23';

if (x === 23) console.log(23);

const calAge = birthYear => 2037 - birthYear;

//console.log("hello");
//console.log(x);

//FIXME
//highlight todo -> VIDEO

//console.log("hola");
//console.log(1992);

//Temperature program

const temperatures = [3,2,-6,-1, 'error',9,13,17,15,14,9,5];

const calcTempAmplitude = function(temps){
    let max= temps[0];
    let min= temps[0];

    for (let i =0; i<temps.length; i++){
        const curTemp= temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max= curTemp;
        if(curTemp <min) min = curTemp;
    }

    console.log("max is ",max,"min is", min);

};
calcTempAmplitude([3,7,4,1,8]);
calcTempAmplitude(temperatures);
