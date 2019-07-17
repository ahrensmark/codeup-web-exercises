"use strict";

//This iterates for the myNumber array and returns a new array based on function
const myNumbers = [1,2,3,4,5];
const myNewNumbers = myNumbers.map(function(x) {
    return x ** 2;
});
console.log(myNumbers);
console.log(myNewNumbers);

const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genres: ["southern","gothic","coming of age"],
        yearsInPublication: 59
    },
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        genres: ["autobiography","short novel"],
        yearsInPublication: 71
    },
    {
        title: "1984",
        author: "George Orwell",
        genres: ["dystopian","sci-fi","political fiction"],
        yearsInPublication: 70
    },
    {
        title: "Noruwei no Mori",
        author: "Haruki Murakami",
        genres: ["coming of age", "novel"],
        yearsInPublication: 32
    }
];
//map practice
const bookTitles = books.map (book => book.title);
console.log(bookTitles);
/*
    MAP
    using .map, create an array that returns all author names.
 */
const authorNames = books.map(book => book.author);
console.log(authorNames);

//filter practice
// const greaterThanSix = myNumbers.filter(function(x) {
//     return x > 6;
//});
const greaterThanSix = myNumbers.filter(x => x > 6);
console.log(greaterThanSix);

const comingOfAge = books.filter(book =>  book.genres.indexOf('coming of age') >= 0).map(book => book.titles);

console.log(comingOfAge);
/*
    FILTER
    using .filter, create an array that returns all books with at least 3 genres
 */
const threeGenres = books.filter(book => book.genres.length >= 3);
console.log(threeGenres);


// reduce practice
const sumNumbers = myNumbers.reduce(function(currentSum, currentElement) {
    return currentSum + currentElement;
},0);
console.log(sumNumbers);

// const sumNumbers = myNumbers.reduce(currentSum,currentElement) => currentSum + currentElement;
   console.log(sumNumbers);

//const longest


const totalBookYears = books.reduce(function(currentTotal, current) {
    return currentTotal + current.yearsInPublication;
},0);
console.log(totalBookYears);
    // REDUCE
    // using .reduce, return the total years between all books.