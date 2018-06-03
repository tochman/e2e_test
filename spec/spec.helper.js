const fs = require('fs');

// Read all js files you want to test
let calc = fs.readFileSync('./src/js/calculator.js');
let person = fs.readFileSync('./src/js/person.js');
// create modules from all js files
eval(calc + person + `\nexports.Person = Person;\nexports.BMICalculator = BMICalculator;`)
