"use strict"
// const githubData = fetch('https://api.github.com/users/gmPuryear/events', {headers: {'Authorization': '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'}})
// githubData.then(response => console.log(response))
// githubData.catch(error => console.log(error));

// const url = 'https://api.github.com/users/gmPuryear/repos';
// const url = 'https://api.github.com/repos/gmPuryear/codeup-web-exercises/commits';
// const url = 'https://api.github.com/repos/gmPuryear/codeup-web-exercises/git/commits/f364f5506a211ebd4de1851a6b29a9abff39bb50';
// const MessageUrl = 'https://api.github.com/users/gmPuryear/events';
// const dateUrl = 'https://api.github.com/repos/gmPuryear/codeup-web-exercises/commits';
// const url = 'https://api.github.com/users/gmPuryear'
const url = 'https://api.github.com/repos/gmPuryear/codeup-web-exercises/commits';

// const url = 'https://api.github.com/repos/gmPuryear';
function getData(firstElement) {
    fetch(url, {headers: {'Authorization': 'GITHUB'}})
        .then(data => data.json())
        .then(data => {
            // console.log([data[firstElement].commit.author.date, data[firstElement].commit.message]);
            let date = data[firstElement].commit.author.date;
            let message = data[firstElement].commit.message;
             addHTML(date, message);
        });
}

function addHTML (date, message) {
    $('body').html(`<h5>` + 'This is from a fetch from github API with the commit message and date of the latest commit. <br> Date: ' +
        `${date}` + `<br>` + ' Message: ' + `${message}` + `</h5>`);
}
// console.log(data[0].commit.committer.date, data[0].commit.message)
console.log(getData(0));




// let dataDate = data[0].commit.author.date;
// console.log(date);
// Promise.all([date, message])
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// .then(data => data.json())
//     // .then(data => console.log(data[0]))
//     // .then(data => console.log(data[0].payload.commits[0].message))
// .then(data => console.log(data[0]));

// https://api.github.com/users/gmPuryear