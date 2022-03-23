"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages
// array.
let threeLanguages = users.filter(function(user) { // user can be any word
    return user.languages.length >= 3; // basically an if statement returning the users that have at least 3 languages
});
console.log(threeLanguages);

// 3. Use .map to create an array of strings where each element is a user's email address
let arrOfEmails = users.map(function (user) {
    return user.email;
})
console.log(arrOfEmails);

const totalYears = users.reduce((totalYears, user) => {
    return totalYears + user.yearsOfExperience;
},0);
let average = (totalYears / users.length);
console.log(average);

// 5. Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        longest= user.email;
    }
    return longest;
}, '') // <-- bucket parameter
console.log(longestEmail);

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis,
// zach, fernando, justin.
let instructorString = users.reduce((resultString, user) => {
    return resultString += user.name + ", ";
}, 'Your instructors are: ');
console.log(instructorString);

// Bonus: Use .reduce to get the unique list of languages from the list of users.
let languages = users.reduce((listOfLanguages, user) => {
    user.languages.forEach(function(lang) {
        if (!listOfLanguages.includes(lang)) {
            listOfLanguages.push(lang);
        }
    })
    return listOfLanguages;
}, [])
console.log(languages);


// .reduce Practice
const people = [
    {name: "Kyle", age: 26},
    {name: "John", age: 31},
    {name: "Sally", age: 42},
    {name: "Jill", age: 42}
]

const ageGroups = people.reduce ((groupedPeople, person) => {
    const age = person.age;
    if (groupedPeople[age] == null)
        groupedPeople[age] = []
        groupedPeople[age].push(person)
        return groupedPeople
},[])
console.log(ageGroups);


