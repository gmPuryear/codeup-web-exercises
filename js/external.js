"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

let favoriteColor = prompt("What is your favoriate color?");

alert("The color " + favoriteColor + " is my favorite color too!");

/*
Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
***When the exercise asks you to use a number, instead use a prompt to ask the user for that number.***
***Use an alert to show the results of each problem***

You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much
will you have to pay?
*/
let pricePerMoviePerDay = Number(prompt("What is the price per day for one movie? "));
console.log(typeof pricePerMoviePerDay);
let littleMermaidDays = Number(prompt("How many days did you rent Little Mermaid for? "));
console.log(typeof littleMermaidDays);
let brotherBearDays = Number(prompt("How many days did you rent Brother Bear for? "));
let herculesDays = Number(prompt("How many days did you rent Hercules for? "));
let days = littleMermaidDays + brotherBearDays + herculesDays;
let totalCost = pricePerMoviePerDay * days;
alert("The total price is: $" + totalCost + ".");

/*
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours
for Amazon.
 */
let facebookWeekPay = Number(prompt("How many hours did you work for Facebook this week? ")) * 300;
let googWeekPay = Number(prompt("How many hours did you work for Google this week? ")) * 400;
let amazonWeekPay = Number(prompt("How many hours did you work for Amazon this week? ")) * 380;
let totalWeekPay = facebookWeekPay + googWeekPay + amazonWeekPay;
alert("Your pay for the week is $" + totalWeekPay + ".");

/*
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with
 her current schedule.
 */
 let classMaxStudents = 25;
 let currentClassSize = Number(prompt("How many students are currently signed up for the class?"));
 let numberSeatsLeft = classMaxStudents - currentClassSize
if (numberSeatsLeft === 0) {
    alert("The class is already full!");
} else {
    var choice = prompt("would you like to add class? ");
    choice = choice.toLowerCase();
}
if (choice === 'yes') {
    numberSeatsLeft--;
}

 /*
 A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
Premium members do not need to buy a specific amount of products.
 */
let moreThan2Items = true;
let offerExpired = true;
let isPremium = true
if ((isPremium && offerExpired) || (offerExpired && moreThan2Items)) {
    alert("You can shop!");
} else {
    alert("You can not shop!");
}
