"use strict"
// let num = 1;
// while (num < 65531) {
//     console.log(num *= 2);
// }
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

// 1.An ice cream seller can't go home until she sells all of her cones. First write enough code that
// generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones
// being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The
// below code shows how to get the random numbers for this exercise.
//
var allCones = Math.floor(Math.random() * 50) + 50;
do {
    let numOfConesWanted = Math.floor(Math.random() * 5) + 1;
    console.log("The number of cones requested is: " + numOfConesWanted);
    if (allCones - numOfConesWanted < 0) {
        console.log("Sorry I only have " + allCones + " left");
    }
    if (numOfConesWanted <= allCones) {
        allCones -= numOfConesWanted;
        console.log(numOfConesWanted + " cones sold! I have " + allCones + " left.");
    }
} while (allCones > 0) {
console.log("All cones have been sold!");
}


