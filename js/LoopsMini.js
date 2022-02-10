"use strict"
// *** MiniExercises on Loops ***


// --- While and Do/while Loops ---
// // prints all numbers from 8 to 50
// let num = 8
// while(num < 51) {
//     console.log(num);
//     num++
// }
//
// console.log("----------------------");
// // prints all odd from 8 to 50
// let num2 = 8;
// while (num2 < 51) {
//     if (num2 % 2 !== 0) {
//         console.log(num2);
//     }
//     num2++;
// }
// console.log("----------------------");
//
// let fullNameEntered = false;
// let names = "";
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// while (!fullNameEntered){
//     names += prompt("Please enter or add to your name");
//     fullNameEntered = confirm("Is this your full name?");
// }
// alert("This is your name: " + names);

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that there are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.
//
// let spaces = 30;
// do {
//     console.log("there are " + spaces + "remaining")
//     spaces -= 2;
// } while (spaces);
// console.log("This parking lot is now full.")

// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.
// let password = 'password';
// let isCorrect = false;
// let attempt = "";
// while (!isCorrect) {
//     attempt = prompt("Please enter your password");
//     isCorrect = (attempt === password);
//     if (!isCorrect) {
//         alert("That is not the correct password");
//     }
//     alert("Correct!");
// }
// alert("That's correct!");

// --- For Loops ---
// TODO: Use a for loop to print the even numbers between 0 and 30, inclusive.
//  HINT: remember the remainder operator (modulo)
// for (var i = 0; i <= 30; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// TODO: loop through numbers 1 - 40. Print "marco" if it's divisible by 3. Print "polo" if it's
//  divisible by 5.
//  -> If it's neither print "I'm not playing"
//  -> Print "marco polo" if it's divisible by 3 and 5.
for(let i = 1; i <= 40; i++) {
    if (i % 3 === 0) {
        console.log('marco');
    } else if (i % 5 === 0) {
        console.log('polo');
    } else {
        console.log("I'm not playing!");
    }
}


