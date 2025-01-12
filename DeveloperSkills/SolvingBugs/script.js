//we will use strict mode in all scripts
//control s use prettier to format the code
'use strict';



const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degress celsius:')) //always return a string 
    }
   //or noob
  // console.log(measurement.value);
  //console.warn
  //console.error too
  //console.table(measurement)
    const kelvin = measurement.value + 273;
    return kelvin;

}


console.log(measureKelvin());
