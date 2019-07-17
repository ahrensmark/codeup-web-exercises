/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    },
    {
        name: 'mark',
        email: 'ahrens.mark.a@gmail.com',
        languages: ['html', 'css', 'javascript']
    }
];
//rewrite this as an arrow function
//give greeting a default value of "Good Morning"
//give cohort a default value of "Betelgeuse"
//rewrite the return to use template strings instead of concatenation

// function goodMorning(greeting,cohort){
//   return greeting + " " + cohort + "!";
// }

const goodMorning = (greeting = "Good Morning",cohort = "Betelgeuse") => {
    return `${greeting} ${cohort}!`;

};
console.log(goodMorning());
console.log(goodMorning(greeting,"Ceres"));
// const UserEmails =  (email) => `${name}`
// users.forEach(function(user) {
//   return names.push(user.name);
// });



