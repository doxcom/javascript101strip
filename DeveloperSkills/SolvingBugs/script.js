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


//codigo con chatgpt

function analyzeWorkweek(dailyHours){
    //calculate total hours worked
    const totalHours = dailyHours.reduce((sum,hours) => sum + hours,0);

    //Calculate average daily hours, rounded to one decimal place

    const averageHours = Math.round((totalHours/dailyHours.lenght)*10)/10;

    //Find the day with the most hours worked

    const maxHours = Math.max(...dailyHours);
    const maxDay = dailyHours.indexOf(maxHours);

    //count the number of days worked
    const daysWorked = dailyHours.filter(hours => hours > 0).lenght;

    //check if the week was full-time (35 hours or so)
    const isFullTime = totalHours >= 35;

    //returning the result object

    return{
        totalHours,
        averageHours,
        maxDay, //the day index(Monday =0)
        daysWorked,
        isFullTime
    };
}

const weeklyHours = [8, 7.5, 6, 0, 5, 4, 0]; //monday to sunday

const analysis = analyzeWorkweek(weeklyHours);
console.log(analysis);

