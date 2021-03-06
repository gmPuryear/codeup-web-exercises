// "use strict";

// ***To see the individual solutions that I have, uncomment the functions and associated parts***

//  // * TODO:
//  // * Create a function named `analyzeColor` that accepts a string that is a color
//  // * name as input. This function should return a message which relates to the
//  // * color stated in the argument of the function. For colors you do not have
//  // * responses written for, return a string stating so
//  // *
//  // * Example:
//  // *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  // *  > analyzeColor('red') // returns "Strawberries are red"
//  // *
//  // *
//  // *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  // *
//  // * You should use an if-else-if-else block to return different messages.
//  //
//  // * Test your function by passing various string literals to it and
//  // * console.logging the function's return value

// // function analyzeColor(inputColor) {
// //     inputColor = inputColor.toLowerCase();
// //     if (inputColor === "blue") {
// //         return "Blue is the color of the sky!";
// //     } else if (inputColor === "red") {
// //         return "Red is the color of an apple!";
// //     } else if (inputColor === "green") {
// //         return "Green is the color of grass!"
// //     } else if (inputColor === "black") {
// //         return "Black is the color of the night sky!";
// //     } else if (inputColor === "purple") {
// //         return "Purple is the color of plums!";
// //     } else {
// //         return inputColor + ", " + "I dont know that color...";
// //     }
// // }
// // console.log(analyzeColor("Blue"));
// // console.log(analyzeColor("Red"));
// // console.log(analyzeColor("Green"));
// // console.log(analyzeColor("Purple"));
// // console.log(analyzeColor("Gray"));


// // Do not change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**

//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */

// console.log(analyzeColor(randomColor));
//
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */

// var colorSwitchStatement = randomColor.toLowerCase();
// function analyzeColor(color) {
//     switch (color) {
//         case "blue":
//             return "Blue is the color of the sky!";
//             break;
//         case "red":
//             return "Red is the color of an apple!";
//             break;
//         case "green":
//             return "Green is the color of the grass!";
//             break;
//         case "black":
//             return "Black is the color of the night sky!";
//             break;
//         default:
//             return "I dont know that color...";
//             break;
//         }
// }

// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */

// alert(analyzeColor(prompt("What color do you pick?")));

// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
// function calculateTotal(luckyNum, price) {
//     switch (luckyNum) {
//         case 0:
//             return "You drew a 0. Sorry you did not get a discount. Total price: $" + price;
//             break;
//         case 1:
//             return "Congratulations! You drew a number 1! You get 10% off! Total is now $" + (price - (price * .10)).toFixed(2);
//             break;
//         case 2:
//             return "Congratulations! You drew a number 2! You get 25% off! Total is now $" + (price - (price * .25)).toFixed(2);
//             break;
//         case 3:
//             return "Congratulations! You drew a number 3! You get 35% off! Total is now $" + (price - (price * .35)).toFixed(2);
//             break;
//         case 4:
//             return "Congratulations! You drew a number 4! You get 50% off! Total is now $" + (price - (price * .50)).toFixed(2);
//             break;
//         default:
//             return "Congratulations! You drew a number 5! Your purchase of " + price + " is FREE!";
//     }
// }
// console.log(calculateTotal(0, 450.35));
// console.log(calculateTotal(1, 450.35));
// console.log(calculateTotal(2, 450.35));
// console.log(calculateTotal(3, 450.35));
// console.log(calculateTotal(4, 450.35));
// console.log(calculateTotal(5, 450.35));


// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
// alert(calculateTotal(luckyNumber, prompt("What is your total?")));

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
function executeChoice() {
    let choice = confirm("Would you like to enter a number?");
    if (choice) {
        custEntersNum(prompt("Please enter a number"));
    } else {
        alert("Ok, bye");
    }
}

function custEntersNum(num) {
    if (isNaN(num)) {
        alert("Need to enter a number type");
        num = prompt("Please enter a number");
    }
    num = parseInt(num);
    if (num % 2 !== 0) {
        alert("The number you chose is odd");
    } else {
        alert("The number you chose is even");
    }
    if (num < 0) {
        alert("The number you chose is negative");
    } else {
        alert("The number you chose is positive");
    }
    alert("The number you chose plus 100 is: " + (num + 100));
}

executeChoice();


