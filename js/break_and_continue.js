"use strict"
//
//                                  *** Break and Continue ***
do {
    var userNumberChoice = prompt("Please enter an odd number between 1 and 50");
} while (userNumberChoice % 2 === 0 || userNumberChoice < 1 || userNumberChoice > 50);
for (var i = 1; i <= 50; i += 2) {
    if (i === userNumberChoice) {
        console.log("Yikes! Skipping number: " + userNumberChoice);
        continue
    } else {
        console.log("Here is an odd number: " + i);
    }
}