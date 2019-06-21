(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Mark",
        lastName: "Ahrens"
    };
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // var person = {
    //     firstName: "Mark",
    //     lastName: "Ahrens",
    //     sayHello: function() {
    //         return "Hello from ";
    //         console.log(sayHello())
    //     }
    // };




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron',
        amount: 180},

        {name: 'Ryan',
        amount: 250},

        {name: 'George',
        amount: 320}
    ];
    var discountPercent = .12;
    var discountAmountMin = 200;

    shoppers.forEach(function(shopper) {
        if(shoppers.amount > discountAmountMin) {
            var amountToPay = shoppers.amount - (shoppers.amount * discountPercent);
            var discountAmount = shoppers.amount * discountPercent;
            console.log(shopper.name + " 's discount is " + discountPercent + " or $" + discountAmount + " with an amount to pay of $ " + amountToPay);
        } else if(shopper.amount <= discount.amount) {
            amountToPay = shopper.amount;
            console.log(shopper.name + " 's discount is " + discountPercent + " or $" + discountAmount + " with an amount to pay of $ " + amountToPay);
        }
    });






    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {
        title: "WHERE THE CRAWDADS SING",
        author: {
            firstName:"Delia",
            lastName:"Owens"
        }
        },
        {
            title: "MRS. EVERYTHING",
            author: {
                firstName:"Jennifer",
                lastName:"Weiner"
            }
        },
        {
            title: "TOM CLANCY: ENEMY CONTACT",
            author: {
                firstName:"Mike",
                lastName:"Maden"
            }
        },
        {
            title: "THE ORACLE",
            author: {
                firstName:"Clive",
                lastName:"Cussler"
            }
        },
        {
            title: "UNSOLVED",
            author: {
                firstName:"James",
                lastName:"Patterson"
            }
        }];
    console.log(books[4].title);
    console.log(books[4].author.firstName);


    var x = 1;
    books.forEach(function(book) {
        console.log("Book # " + x++);
        console.log('Title: ' + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();