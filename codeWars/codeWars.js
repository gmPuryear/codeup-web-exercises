// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// function SeriesSum(n) {
//     let arr = [];
//     let sum = 0;
//     for (var i = 0; i < n; i++) {
//         if (i === 0) {
//             arr[0] = 1;
//         } else if (i === arr.length - 1) {
//             break;
//         } else {
//             arr[i] = arr[i - 1] + (1 / 3);
//         }
//     }
//     console.log(arr);
// }
// console.log(SeriesSum(4));

// You need to double the integer and return it.
// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i *2 ;
// }

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
// let arr = [];
// function squareDigits(num) {
//     let numStr = num.toString();
//     for (var i = 0; i < numStr.length; i++) {
//         let currentChar = numStr[i];
//         let currentNum = parseInt(currentChar);
//         let squared = currentNum ** 2;
//         arr.push(squared);
//     }
//     var arr2 = arr.join('');
//     return arr2;
//
// }
// console.log(squareDigits(9119));

