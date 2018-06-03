function BMICalculator(weight, height) { }

BMICalculator.prototype.metric_bmi = function (obj) {
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height / 100 * height / 100);
        obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
    }
};

BMICalculator.prototype.imperial_bmi = function (obj) {
    var weight = obj.weight;
    var height = obj.height;
    if (weight > 0 && height > 0) {
        var finalBmi = weight / (height * height) * 703;
        obj.bmiValue = parseFloat(finalBmi.toFixed(2));
        setBMIMessage(obj);
    }
};

function setBMIMessage(obj) {
    if (obj.bmiValue < 18.5) {
        obj.bmiMessage = "a Shadow";
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = "Eddard Stark";
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = "Samwell Tarly";
    }
    if (obj.bmiValue > 30) {
        obj.bmiMessage = "Hodor";
    }

}
