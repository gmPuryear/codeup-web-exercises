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

var car = { make: "ford", model: "F-150", Color: "blue"};
    console.log(car);
    car['engine'] = 5.3 + 'l';
    console.log(car);
    car['model'] = "Mustang";
    console.log(car);

    let arr = [50, 2, 40, 60];
    let min = Math.min(arr);
    console.log(min);

    let current = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === current) {
            continue;
        } if (arr[i] < arr[0]) {
            var low = arr[i];
        }

    }
    console.log(low);