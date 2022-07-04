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

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argumen
// t (also a string).
// example: solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// function solution(str, ending){
//     let endCount = ending.length;
//     let strEnd = str.length;
//     let strArr = str.split('');
//     let endingArr = ending.split('');
//     for (let i = str.length - 1, j = 0; j <= endCount; i-- && j++) {
//         console.log(strArr[i]);
//         console.log(endingArr[j]);
//         var stringArr = [];
//         // let endArr = [];
//         stringArr.push(strArr[i]);
//     }
//     console.log(stringArr);
// }
// console.log(solution('abc', 'bc'));

// ----- PROBLEM -----
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your
// most secret question is still correct. However, since someone could look over your shoulder, you don't want that
// shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'. -----
// -----PLANNING -----
// 1. Find type of CC 2. if number turn to string then split into arrau using split. 3. loop backwards starting at
// length of array - 4 + 1, 4. change the present value of array to a #. 5. change back to string. 6. return new string.
// ----- SOLUTION =====
console.log(maskify(4556364607935616))

function maskify(cc) {
    let ccToString = cc.toString();
    let ccToArr = ccToString.split('');
    let last4Numbers = ccToArr.slice(ccToArr.length - 4, ccToArr.length);
    // console.log(last4Numbers);
    let splicedArr = ccToArr.splice(0, ccToArr.length - 4);
    // console.log(splicedArr);
    for (let i = 0; i < splicedArr.length; i++) {
        splicedArr[i] = '#';
    }
    // console.log(splicedArr);
    for (i = 0; i < last4Numbers.length; i++) {
        splicedArr.push(last4Numbers[i]);
    }
    // console.log(splicedArr);
    let answer = splicedArr.join('');
    console.log(answer);
    return answer;
}




