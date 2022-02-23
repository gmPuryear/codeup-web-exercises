"use strict"
//                                      ***Warmups***
//Write a function called findAverage that takes in an array of integers representing grades and returns the average.
// Example input: [95, 74, 86, 100]
// Example output: 88.75 (edited)
// function findAverage(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return (sum / arr.length);
// }
// console.log(findAverage([95, 74, 86, 100]));
//
// var car = { make: "ford", model: "F-150", Color: "blue"};
//     console.log(car);
//     car['engine'] = 5.3 + 'l';
//     console.log(car);
//     car['model'] = "Mustang";
//     console.log(car);
//
//     let arr = [50, 2, 40, 60];
//     let min = Math.min(arr);
//     console.log(min);
//
//     let current = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === current) {
//             continue;
//         } if (arr[i] < arr[0]) {
//             var low = arr[i];
//         }
//
//     }
//     console.log(low);

// 2/16/22
// Create an object representing a person. It should have properties representing:
// names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console
// let person = {
//     names: ['George Puryear', 'Haley Weingarden', 'Joe Blow', 'Jane Doe', 'Roger Rabbit'],
//     dateOfbirth: '11/30/1987',
//     occupation: 'Hitman'
// };
// 2/16/22
// Create an object representing a person’s contact info. It should have:
// phone number
// street address
// state
// postal code
// email address
// Hard code some values in that object, then log it and its properties to the console
// let contactInfo = {
//     phoneNumber: '512-351-5351',
//     streetAddress: '2825 Saint Federico Way',
//     city: 'Round Rock',
//     state: 'TX',
//     postalCode: '78665',
//     email: 'gm.puryear@yahoo.com'
// };
// Defines a contact info object
// function contactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress) {
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.email = emailAddress;
// }
// contactInfo.printAllContactInfo = function() {
//     console.log(this.streetAddress + '\n' + this.city + '\n' + this.state + '\n' + this.postalCode);
// }
// contactInfo.printAllContactInfo();

// For deep copying objects: ObjName = JSON.parse(JSON.stringify(objectToBeCopied));

// defines a person object
// function Person(names, occupation, dob) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
// }
//
// let person2 = new Person(
//     names: ['George', 'M', 'Puryear'],
//     occupation: 'Cat Herder / Firefighter',
//     dob: '11.30.1987',
//     new contactInfo(
//          = phoneNumber;
//         streetAddress = streetAddress;
// this.city = city;
// this.state = state;
// this.postalCode = postalCode;
// this.email = emailAddress;
//     )


// Defines a contact info object
// function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
//     this.phoneNumber = phoneNumber;
//     this.streetAddress = streetAddress;
//     this.city = city;
//     this.state = state;
//     this.postalCode = postalCode;
//     this.emailAddress = emailAddress;
// }
// // Defines a person object
// function Person(names, occupation, dob, contactInfo) {
//     this.names = names;
//     this.occupation = occupation;
//     this.dob = dob;
//     this.contactInfo = contactInfo;
// }
// // makes a new person object instance (by invoking the constructor)
// let person2 = new Person(
//     ["Casey", "J", "Edwards"],
//     "Cat Herder / Firefighter",
//     "11.30.1989",
//     new ContactInfo(
//         '123.456.7890',
//         '123 Anywhere Ln',
//         'Beverly Hills',
//         'CA',
//         '90210',
//         'nope@no-no-no.no'));
//
// console.log(person2.contactInfo.emailAddress);

// WarmUp 2/17/22
// We are going to create a method which
// allows a user to input their desired amount of names names
// use prompt, alert, confirm inside of a while loop
//     assign each name to an array
// once the user decides they are done giving names, end the loop and return the string array
// then assigning that returned array by invoking your new function on the Person.names property value!
//     Things to consider:
//     Should this be a standalone function or should it be a method on the Person object?

// function getNames() {
//     let namesArr = [];
//     let hasMoreNames = true;
//     while (hasMoreNames) {
//         namesArr.push(prompt("Please enter a name"));
//         // asking if they are done entering names
//         hasMoreNames = confirm("Are you done adding names?");
//     }
//     return namesArr;
// }
// console.log(getNames());

// WarmUp 2/18/22
// Create a function which returns true if the given argument is a number, false if it is not a number
// function isNumber(input) {
//     if (!isNaN(input) || typeof input === "number")  {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isNumber(5));
// console.log(isNumber('5'));
// console.log(isNumber('NaN'));
// console.log(isNumber('sgsdgd asas'));

let myTable = {
    height: 75,
    width: 120,
    length: 60,
    color: 'white'
};

myTable.area = function() {
    console.log(this.length * this.width);
}
myTable.area();

// constructor
const Table = function(height, width, length, color) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.color = color;
}