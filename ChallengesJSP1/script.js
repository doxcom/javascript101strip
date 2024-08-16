//variables examples
let js = 'damazing';
if (js === 'amazing') alert('Values and Variables is FUN!');



//Body Mass Index
//BMI=mass / height**2/(height * height)

let marksMass = 78;
let johnMass = 92;

let markHeight = 1.69;
let johnHeight = 1.76;

let markHigherBMI = true;

let bmiMark = marksMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;
console.log(bmiMark);

console.log("MARK BMI " + bmiMark);
console.log("JOHN BMI " + bmiJohn);

if (bmiJohn > bmiMark) {
    console.log("Johns BMI is higher than Mark");
} else {
    console.log("Marks BMI is higher than Johns");
}

let dolphScoreA = 97, dolphScoreB = 112, dolphScoreC = 101;

let koalaScoreA = 109, koalaScoreB = 95, koalaScoreC = 123;

console.log("DOLPHINS AVG : " + (dolphScoreA + dolphScoreB + dolphScoreC) / 3);

console.log("KOALAS AVG " + (koalaScoreA + koalaScoreB + koalaScoreC) / 3);

let dolphAvg = (dolphScoreA + dolphScoreB + dolphScoreC) / 3;

let koalaAvg = (koalaScoreA + koalaScoreB + koalaScoreC) / 3;

if (dolphAvg >= 100 && dolphAvg > koalaAvg) {
    console.log("DOLPHINS are Winners");
} else if (koalaAvg >= 100 && koalaAvg > dolphAvg) {
    console.log("KOALA are the Winners");
} else if (koalaAvg === dolphAvg) {
    console.log("IS A DRAW");
}


//challenge #4

let tip_a = .15;
let tip_b = .20;
let bill = 250;
let total = 0;

bill >= 50 && bill <= 300 ? console.log("The bill was $" + bill + ",the tip was $" + (total = bill * tip_a) + ",and the total value $" + (bill + total)) : console.log("The bill was $" + bill + ",the tip was $" + (total = bill * tip_b) + ",and the total value $" + (bill + total));

