const sumAll = function(num1, num2) {
    if (((num1 || num2) < 0) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }

    if (num1 > num2) {
        let holder = num1;
        num1 = num2;
        num2 = holder;
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
