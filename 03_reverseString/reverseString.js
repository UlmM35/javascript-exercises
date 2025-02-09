const reverseString = function(string) {
    const splitString = string.split("").reverse().join("");

    console.log(splitString);

    return splitString;
};

// Do not edit below this line
module.exports = reverseString;
