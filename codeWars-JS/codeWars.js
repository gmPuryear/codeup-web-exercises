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

// TODO: You need to double the integer and return it.
// function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i *2 ;
// }

// TODO: Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
//  For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//  Note: The function accepts an integer and returns an integer
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

// TODO: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument
//  (also a string).
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

// TODO: ----- PROBLEM -----
//  Usually when you buy something, you're asked whether your credit card number, phone number or answer to your
//  most secret question is still correct. However, since someone could look over your shoulder, you don't want that
//  shown on your screen. Instead, we mask it.
//  Your task is to write a function maskify, which changes all but the last four characters into '#'. -----
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
// TODO: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side
//  of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty
//  or there is no DNA at all (again, except for Haskell).
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

//TODO: Let's say a triple is (a,b,c) is a zigzag if a < b > c or a > b < c. Given an array of integers "numbers", your task
// is to check all teh triples of its consecutive elements for being a zigzag. More formally, your task is to construct
// an array of length numbers.length - 2, where the ith elemetn of the output array equals 1 if it follows pattern
// SOLUTION:

// const solution = (numbers) => {
//     let solutionArr = [];
//
//     for (let i = 1; i < numbers.length - 1; i++) {
//         let previousElement = numbers[i - 1];
//         let currentElement = numbers[i];
//         let nextElement = numbers[i + 1];
//         if ((previousElement < currentElement && currentElement > nextElement) || (previousElement > currentElement && currentElement < nextElement)) {
//             solutionArr.push(1);
//         } else {
//             solutionArr.push(0);
//         }
//     }
//     return solutionArr;
// }
// console.log(solution([1, 2, 3, 4]));

// get rows:
// let rws = matrix.length;
// let cls = matrix[0].length;
// let

// let grades = [
//     [12, 13, 32, 43, 42, 23, 60, 85],
//     [12, 43, 21, 12, 43, 12, 45],
//     [43, 12, 43, 12, 45, 12]
// ]
// for (let i = 0; i < grades.length; i++) {
//     for (let j = 0; j < grades[i].length; j++) { // make sure you do grades[i].length so that if there is a jagged array
//         // it will account for that
//         console.log(grades[i][j]);
//     }
//     console.log('--------------') // separates each row with dashed line
// }

// TODO: Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing
//  sequence by removing no more than one element from the array.
// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing
// only one element is also considered to be strictly increasing
// Example: For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.
// There is no one element in this array that can be removed in order to get a strictly increasing sequence.
// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get
// the strictly increasing sequence [1, 3]
// const solution = (sequence) => {
//     // 1. set counter to 0, which will keep track of number of times numbers decrease
//     // 2. if number before current is less than or equal to current, add one to counter
//     // 3. if the counter is more than 1, return false, else return true
//     let counter = 0;
//     for (let i = 1; i < sequence.length; i++) {
//         if (sequence[i-1] >= sequence[i]) {
//             counter ++;
//             if (counter > 1) {
//                 return false;
//             }
//             if (sequence[i-2] >= sequence[i] && sequence[i-1] >= sequence[i+1]) {
//                 return false;
//             }
//         }
//     }
//     return true
// }
// console.log(solution([1, 3, 2, 1]))
// console.log(solution([1, 3, 2]))
// console.log(solution([1, 2, 1, 2]))

// //TODO: After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a
// // different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the
// // CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any
// // of the free rooms. Given matrix, a rectangular matrix of integers, where each value represents the cost of the room,
// // your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that
// // don't appear below a 0).
// // 1. loop through matrix by columns, loop through the each element.
// // 2. Check for free rooms
// // 3. find room under it and change to free
// // 4. add up total
// const solution = (matrix) => {
//     let total = 0;
//     for (let i = 0; i < matrix[0].length; i++) { // loops through each column
//         for (let j = 0; j < matrix.length; j++) { // loop through each row
//             if (matrix[j][i] === 0) {
//                 break;
//             }
//             // console.log(matrix[j][i])
//             total += matrix[j][i];
//         }
//     }
//     return total;
// }
// console.log(solution([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3]]))

// TODO: Given an array of strings, return another array containing all of its longest strings.
//  Example:
//  For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
//  solution(inputArray) = ["aba", "vcd", "aba"].

// const solution = (inputArray) => {
//     let longestStringsArr = [];
//     inputArray.sort((a, b) => {
//         return a.length - b.length;
//     });
//     let longestString = inputArray[inputArray.length - 1].length;
//     for (let i = 0; i < inputArray.length; i++) {
//         if (inputArray[i].length === longestString) {
//             longestStringsArr.push(inputArray[i]);
//         }
//     }
//     return longestStringsArr;
// }
//
// console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));

// TODO: Given two strings, find the number of common characters between them.
//  For s1 = "aabcc" and s2 = "adcaa", the output should be
//  solution(s1, s2) = 3.
//  Strings have 3 common characters - 2 "a"s and 1 "c".
// 1. loop through one string and then loop through other comparing first string character to second one
// const solution = (s1, s2) => {
//     let sum = 0;
//     let arrS1 = s1.split('');
//     let y = s2;
//
//     while (arrS1.length) { // as soon as the length is equal to 0 (because 0 is falsey so we dont need arrS1.length > 0
//         const x = arrS1.pop()
//         if (y.includes(x)) { // if the x value is in the y (which is a copy of s2 string to manipulate,
//             sum++ // add one to sum
//             y = y.replace(x, ' ') // replace the x value in y with a space so it takes it out. It just gets rid of it
//         }
//     }
//     return sum;
// }
// console.log(solution("aabcc", "adcaa"));
// //** ALTERNATE ANSWER FOR LAST PROBLEM **
// function solution(s1, s2) {
//     for (var i = 0; i < s1.length; i++) {
//         s2 = s2.replace(s1[i], "!");
//         console.log(s2)
//     }
//     return s2.replace(/[^!]/g, "").length;
// }

//TODO: Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum
// of the first half of the digits is equal to the sum of the second half.
// Given a ticket number n, determine if it's lucky or not.
// EXAMPLE:
// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

// const solution = (n) => {
//     // 1. split n into array
//     // 2. first half starts at 0 and ends at length of n/2 - 1
//     // 3. second half starts at first half + 1
//     let nToString = n.toString();
//     let splitNString = nToString.split('');
//     let firstHalf = splitNString.length / 2;
//     let secondHalf = (splitNString.length / 2);
//     let firstHalfSum = 0;
//     let secondHalfSum = 0;
//     for (let i = 0; i < firstHalf; i++) {
//         firstHalfSum += parseInt(splitNString[i]);
//     }
//     for (let j = secondHalf; j < splitNString.length; j++) {
//         secondHalfSum += parseInt(splitNString[j]);
//     }
//     return (firstHalfSum === secondHalfSum)
// }
//
// console.log(solution(1230))

//TODO: Some people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// People can be very tall!
// Example:
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// const solution = (a) => {
//     const sortedPeople = a.filter(element => element !== -1).sort((a,b)=> a-b) // take out all trees in the array
//     let i = -1;
//     return a.map(value => {
//         if (value === -1) return -1
//         i++
//         return a = sortedPeople[i];
//     })
// }

// ** Alternate Solution **
// const solution = (a) => {
//     const sortedPeople = a.filter(element => element !== -1).sort((a,b) => a-b)
//     return a.map(value => (value === -1) ? -1 : sortedPeople.shift())
// }
// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));

//TODO: Write a function that reverses characters in (possibly nested) parentheses in the input string.
// Input strings will always be well-formed with matching ()s.
// Example:
// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

// const solution = (inputString) => {
//     while (inputString.includes('(')) { // while the string has an open bracket, keep doing the following:
//         let lastPar = inputString.indexOf(')'); // find position of closing bracket
//         let firstPar = inputString.lastIndexOf('(', lastPar); // find position of opening bracket.
//         let slicedBetweenPars = inputString.slice(firstPar + 1, lastPar); // slicing string between the brackets
//         let reversedSlicedString = slicedBetweenPars.split('').reverse().join(''); // splitting, reversing, then joining the string between brackets
//         inputString = inputString.slice(0, firstPar) + reversedSlicedString + inputString.slice(lastPar + 1); // putting back together the string with no brackets
//     }
//     return inputString;
// }
//
// // console.log(solution("(bar)")) // expected: "rab"
// // console.log(solution("foo(bar)baz")); // expected: "foorabbaz"
// console.log(solution("foo(bar)baz(blim)")) // expected "foorabbazmilb"
// // console.log(solution("foorabbaz")); // expected: "foorabbaz"
// // console.log(solution("foo(bar(baz))blim")); // expected: "foorabbazmilb"

//TODO: Several people are standing in a row and need to be divided into two teams. The first person goes into team 1,
// the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.
// You are given an array of positive integers - the weights of the people. Return an array of two integers, where the
// first element is the total weight of team 1, and the second element is the total weight of team 2 after the division
// is complete.
// Example:
// For a = [50, 60, 60, 45, 70], the output should be
// solution(a) = [180, 105].

// const solution = (a) => {
//     // 1. make team one and make team two
//     // 2. loop through people array and every odd, they go in team 1, even they go in team 2
//     // 3. find total weight for each group and push each into new array, use reduce to get total of each
//     let totalWeightArray = []; // array that will be returned at end with both team's total weights
//     let teamTwo = a.filter((person, index) => { // creates team two as an array and puts each even element
//         if (index % 2 !== 0) {
//             return person;
//         }
//     })
//     let teamOne = a.filter((person, index) => { // creates team one as an array and puts each odd element into it
//         if (index % 2 === 0) {
//             return person;
//         }
//     })
//     // adds up all weights of team two
//     let teamTwoTotal = teamTwo.reduce((previousValue, currentValue) => { return previousValue + currentValue}, 0);
//     // adds up all weights of team one
//     let teamOneTotal = teamOne.reduce((previousValue, currentValue) => { return previousValue + currentValue}, 0);
//     totalWeightArray.push(teamOneTotal, teamTwoTotal); // pushes both teams total weights into an array
//     return totalWeightArray;
// }
// console.log(solution([50, 60, 60, 45, 70]))

//TODO: Given a rectangular matrix of characters, add a border of asterisks(*) to it.
// Example:
// For
// picture = ["abc",
//     "ded"]
// the output should be:
// solution(picture) = ["*****",
//     "*abc*",
//     "*ded*",
//     "*****"]
//
const solution = (picture) => {
    let ast = "*";
    const picWithAst = picture.map(element => '*' + element + '*')
    let border = [];
    for (let i = 0; i < picWithAst[0].length; i++) {
        border.push('*');
    }
    border = border.join('');
    picWithAst.push(border);
    picWithAst.unshift(border);
    return picWithAst;
}

console.log(solution(["abc",
    "ded"]))
