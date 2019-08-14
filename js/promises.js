"use strict";

// 2. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    } );
}


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// 4. Create a function that accepts a GitHub username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.
const getLastPush = function(username) {
    const giturl = "https://api.github.com/users/"+username+"/events";
    return fetch(giturl, {
        headers: {
            "Authorization": `token ${githubToken}`
        }
    })
        .then(response => response.json())
        .then(events => {
            for (let event of events) {
                if (event.type == "PushEvent") {
                    // console.log(`${event.type} at ${event.created_at}` )
                    return (event.created_at);
                }
            }
        })

}

let username = prompt("What user do you want to check up on?");
console.log(getLastPush(username));
