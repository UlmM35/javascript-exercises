const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    let firstFib = 1;
    let secondFib = 1;
    let fibN = 0;
    for (let i = 0; i < n - 2; i++) {
        fibN = firstFib + secondFib;
        firstFib = secondFib;
        secondFib = fibN;
    }
    return fibN;
};

// Do not edit below this line
module.exports = fibonacci;
