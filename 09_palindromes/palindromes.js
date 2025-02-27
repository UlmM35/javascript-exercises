 const palindromes = function (string) {
    const stringWithOutComas = string.replaceAll(",", "");
    const stringWithoutSpaces = stringWithOutComas.replaceAll(" ", "");
    const stringWithoutUpper = stringWithoutSpaces.toLowerCase();
    const stringWithoutStop = stringWithoutUpper.replaceAll(".", "");
    const stringWithoutExc = stringWithoutStop.replaceAll("!", "");
    const array = stringWithoutExc.split("");
    array.reverse()
    const joined = array.join(""); 
    return stringWithoutExc == joined;
};

// Do not edit below this line
module.exports = palindromes;
