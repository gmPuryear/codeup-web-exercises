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
// console.log(maskify(4556364607935616))
//
// function maskify(cc) {
//     let ccToString = cc.toString();0
//     let ccToArr = ccToString.split('');
//     let last4Numbers = ccToArr.slice(ccToArr.length - 4, ccToArr.length);
//     // console.log(last4Numbers);
//     let splicedArr = ccToArr.splice(0, ccToArr.length - 4);
//     // console.log(splicedArr);
//     for (let i = 0; i < splicedArr.length; i++) {
//         splicedArr[i] = '#';
//     }
//     // console.log(splicedArr);
//     for (i = 0; i < last4Numbers.length; i++) {
//         splicedArr.push(last4Numbers[i]);
//     }
//     // console.log(splicedArr);
//     let answer = splicedArr.join('');
//     console.log(answer);
//     return answer;
// }

// ----- PROBLEM -----
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side
// of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty
// or there is no DNA at all (again, except for Haskell).
// ----- PLANNING -----
// 1. Create empty array to hold complement of the input.
// 2. Iterate over input
// 3. If else statements to check what character is present
// 4. based on what that character is, push its compliment to array

// console.log(DNAStrand('AAAA'))
// // console.log(DNAStrand('ATTGC'))
// // console.log(DNAStrand('GTAT'))
// //
// // function DNAStrand(dna) {
// //     let complimentArr = [];
// //     for (let i = 0; i < dna.length; i++) {
// //         // console.log(dna[i]);
// //         if (dna[i] === 'A') {
// //             complimentArr.push("T")
// //         } else if (dna[i] === 'C') {
// //             complimentArr.push("G");
// //         } else if (dna[i] === "T") {
// //             complimentArr.push('A')
// //         } else if (dna[i] === "G") {
// //             complimentArr.push("C");
// //         }
// //     }
// //     let complimentArr2 = complimentArr.join('');
// //     return complimentArr2;
// // }

// TODO:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in
// descending order. Essentially, rearrange the digits to create the highest possible number.
// Example input/outputs:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// const descendingOrder = (n) => {
//     let inputNum = n;
// // create empty array
//     let arr = [];
//     // convert number to string
//     let inputAsString = inputNum.toString();
//     // split string to array as individual chars
//     let splitStr = inputAsString.split('');
//     // create temp variable for last element and to compare to current
//     let highestNumber = splitStr[0];
//     for (let i = 1; i < splitStr.length; i++) {
//         console.log(splitStr[i] < highestNumber);
//     }
//
// }
//
// descendingOrder(42145);

// TODO: Given a year, return the century it is in. The first century spans from the year 1 up to and including the
//  year 100, the second - from the year 101 up to and including the year 200, etc.
// Example:
// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.
// SOLUTION:
// const Solution = (year) => {
//     let stringYear = year.toString();
//     let century;
//     switch (true) {
//         case stringYear >= 1 && stringYear <=100:
//             century = 1;
//             break
//         case stringYear.length < 4:
//             century = parseInt(stringYear[0]) + 1;
//             break
//         default:
//             century = parseInt(stringYear[0] + stringYear[1]) + 1;
//             return century;
//     }
//     return century;
// }

// console.log(Solution(2000));
// Solution 2:
// function solution(year) {
//     return Math.ceil(year / 100)
// }

// TODO: Given the string, check if it is a palindrome.
// SOLUTION:
// const solution = (inputString) => {
//     // empty string that will store the reversed string that will be compared to the input string
//     let reversedString = "";
//     // loops through the input string starting at back of input to front
//     for (let i = inputString.length - 1; i >= 0; i--) {
//         // adding the looped thourgh values to the reversed string
//         reversedString += inputString[i];
//     }
//     // if the reversed string matches the input then true, else false
//     return (reversedString === inputString ? true : false)
// }
//
// console.log(solution('aabaa'))
// console.log(solution('abac'))

// // TODO: Given an array of integers, find the pair of adjacent elements that has the largest product and return that
// //  product.
// const solution = (inputArray) => {
//     // highest product is set first set to the first 2 elements
//     let currentHighest = inputArray[0] * inputArray[1];
//     let currentIteration;
//     // go through array multiplying current element with previous element and comparing their product to the current highest
//     for (let i = 1; i < inputArray.length; i++) {
//         let currentIteration = inputArray[i] * inputArray[i - 1];
//         if (currentIteration > currentHighest) {
//             currentHighest = currentIteration
//         }
//     }
//     return currentHighest;
// }
// console.log(solution([3, 6, -2, -5, 7, 3]));

// TODO: Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
//  A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by
//  taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see
//  the 1-, 2-, 3- and 4-interesting polygons in the picture below.
// Example:
// For n = 2, the output should be
// solution(n) = 5;
// For n = 3, the output should be
// solution(n) = 13.
// SOLUTION:
// const solution = (n) => {
//     // figure out pattern vv
// //               (n-1)^2  | n^2
// // n = 1; area: 1 = 0 + 1
// // n = 2; area: 5 = 1 + 4
// // n = 3; area: 13 = 4 + 9
// // n = 4; area: 25 = 9 + 16
//     // this returns the area of the given polygon
//     return Math.pow(n-1, 2) + Math.pow(n, 2)
// }
//
// console.log(solution(3)) // expected: 13

// TODO: Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an
//  non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to
//  largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional
//  statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
// Example:
// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.
// const solution = (statues) => {
//     let additionalStatues = 0;
//     // sort from lowest to highest number
//     // starting from first element, if next element is not the next number, then add one to required statues
//     // if it does exist, go to next iteration
//     // starting at [0], if current element + 1 does not equal the value of current element + 1, add to counter
//     statues.sort((a, b) => a -b ); // sorting statues numerically ascending
//     console.log(statues);
//     for (let i = 0; i < statues.length - 1; i++) {
//         if (statues.length === 0) { // if array has only one element, then there does not to be anymore statues
//             return 0;
//         }
//         if(statues[i + 1] !== statues[i] + 1) { // if the next element in array does not have the next number, then
//             // get the number by subtracting the next element by the current one.
//             additionalStatues += (statues[i + 1] - statues[i]) - 1;
//         } else {
//             continue;
//         }
//     }
//     return additionalStatues;
// }
// console.log(solution([6, 2, 3, 8])); // expected: 3 more statues needed
// console.log(solution([5, 4, 6])); // expected: 0 more needed
// console.log(solution([0, 3])); // expected: 2 more needed
// console.log(solution([6, 3])); // expected: 2 more needed
// console.log(solution([5, 4, 6])); // expected: 0 more needed










