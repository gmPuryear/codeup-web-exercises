"use strict"
//                                            *** Fibonacci Numbers ***
// Write a loop that outputs the first 50 fibonacci numbers. https://en.wikipedia.org/wiki/Fibonacci_number
// Recommend starting your loop at 1 and ending your loop once you've calculated 50 fibonacci numbers.

var arr = [0, 1];
for (var i = 2; i < 50; i++) {
    if (i === 2) {
        arr.push(arr[i - 1]);
    } else {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
}
console.log(arr);
console.log(arr.length);
