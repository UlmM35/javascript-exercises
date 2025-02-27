const findTheOldest = function(array) {
    array.sort(function(a, b) {
        let first = a.yearOfDeath - a.yearOfBirth;
        let second = b.yearOfDeath - b.yearOfBirth;
        if (a.yearOfDeath == undefined) {
            first = new Date().getFullYear() - a.yearOfBirth;
        } else if (b.yearOfDeath == undefined) {
            second = new Date().getFullYear() - b.yearOfBirth;
        }
        return second - first;
    });
    return array[0];
}

// Do not edit below this line
module.exports = findTheOldest;
