"use strict";


// 1. Create a file named promises.js inside of your js directory.
//
// 2. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// function greetings (name) {
//     return 'hello ' + name
// }
// const greetings = (name) => {
//     return `hello ${name}`;
// }
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

//wait(10000).then(() => console.log("10 seconds")).catch(failureCallback);
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// 3. Generate a Personal Access Token for the GitHub API.
//
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
//
// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// 4. Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.
// set user name to compare to
const userName = 'ahrensmark';
// access api for data
fetch ('https://api.github.com/users/' + userName + '/events', {headers: {'Authorization': 'token githubToken'}})
    .then((response) => {const users = response.json()
        .then((users) => {const usernames = users.map(user => user.login);
        usernames.forEach((username) => {
            console.log(users)
        });
    });
});
