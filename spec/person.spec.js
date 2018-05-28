

const { expect } = require('chai');
// const BMICalculator = require('../src/js/calculator');
// const Person = require('../src/js/person');
//  const { Person, BMICalculator} = require('./test-helper')



describe("Person", () => {
    let person = new Person({
        weight: 90,
        height: 186
    });

    beforeEach(function () {
        // let person = new Person({
        //     weight: 90,
        //     height: 186
        // });
    });

    it("should have weight of 90", () => {
        expect(person.weight).to.equal(90);
    });

    it("should have height of 186", () => {
        expect(person.height).to.equal(186);
    });

    it("should calculate BMI value", () => {
        person.calculate_bmi_metric();
        expect(person.bmiValue).to.equal(26.01);
    });

    it("should have a BMI Message", () => {
        person.calculate_bmi_metric();
        expect(person.bmiMessage).to.equal('Samwell Tarly');
    });
});