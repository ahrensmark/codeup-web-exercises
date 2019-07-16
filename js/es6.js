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

// 1. TODO: fill in your name and email and add some programming languages you know
// to the languages array

// 2. TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// const name = 'jim';
// const email = '';
// const languages = [];
// console.log(name);
// let something = "fred";
// console.log("tehhwqer");

// 3. TODO: rewrite the object literal using object property shorthand
// users.push({
//   name,
//   email,
//   languages
// });


// 4. TODO: replace `var` with `let` in the following variable declarations
 let emails = [];
 let names = [];
const myEmails = (emails,names) => ${email};
// 5. TODO: rewrite the following using arrow functions
// users.forEach(function(user) {
//   return emails.push(user.email);
// });
const userNames = (user) ${email}
const myGreeting = (greeting = "Good Morning",name = "Betelgeuse") => {
  return `${greeting},${name}`;

const UserEmails =  (email) => ${name}
users.forEach(function(user) {
  return names.push(user.name);
});


// 6. TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;

// 7. TODO: rewrite the assignment below to use template strings
  //developers.push(${name} + '\'s email is ' + ${email},${name} ' knows ' + ${languages.join}(', '));
//});


// 8. TODO: Use `let` for the following variable
let list = '<ul>';

// 9. TODO: rewrite the following loop to use a for..of loop
//developers.forEach(function (developer) {
for (developers of developers)

// 10. TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';
