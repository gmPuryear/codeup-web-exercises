/*
Make a function named isLowerCase(letter) which returns true if the parameter is lowercased;otherwise it returns false
Write a function named double(n) that returns a number times two
Make a function named areIdentical(input1, input2) that returns true if both inputs are same value and data type;
otherwise it returns false.
*/

function isLowerCase(letter) {
    if (letter == letter.toLowerCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(isLowerCase("a"));

function double(num) {
    return num * 2;
}
console.log(double(10));

function areIdentical(input1, input2) {
    if (input1 === input2) {
        return true;
    } else {
        return false;
    }
}
console.log(areIdentical(1, 1));

