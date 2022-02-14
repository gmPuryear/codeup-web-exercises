"use strict"
//                                      ***Warmups***
//Write a function called findAverage that takes in an array of integers representing grades and returns the average.
// Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)
function findAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length);
}
console.log(findAverage([95, 74, 86, 100]));

