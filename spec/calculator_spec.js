const { expect } = require('chai');
const { Person, BMICalculator } = require('./spec.helper')

describe("BMICalculator", () => {
    let person = new Person({
        weight: 90,
        height: 186
    });
    let calculator = new BMICalculator();


    it("caluculates BMI for a person using metric method", () => {
        calculator.metric_bmi(person);
        expect(person.bmiValue).to.equal(26.01);
    });

});