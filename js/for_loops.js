"use strict";

//Loops - Exercise #2
// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
// for that number (just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(num) {

}
// var num = 7;
// var y = 0;
//
// while (y < 10) {
//     y++;
//     console.log(num + " x " + y + " = " + (num * y) );
// }
for (var num = 7, y = 0; y <= 10; y++) {
    console.log(num + " x " + y + " = " + (num * y));
}

// Loops - Exercise #3
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...
//Math.floor(Math.random() * 50) + 50;


for(var stop = 1; stop < 11; stop++){
    var randomNum = (Math.floor(Math.random() * 200) + 20);
// randomNum = (Math.floor(Math.random() * 200) + 20);
    if(randomNum % 2  === 0) {
        console.log(randomNum + " is even");
    } else(randomNum % 2 !== 0); {
        console.log(randomNum + " is odd");
    }
}

// Loops - Exercise #4
// Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

// var num = 1;
//  while(num <= 999999999) {
//      console.log(num);
//      if(num )
//
//  }


// Loops - Exercise #5
// Create a for loop that uses console.log to create the output shown below.
//
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5


for(var num = 100; num >= 5; num -= 5) {
    console.log(num);
}

// Break and Continue - Exercise #2
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the
// user if they enter invalid input.


//Break and continue - Exercise #3
// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
//
//
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// Here is an odd number: 5
// Here is an odd number: 7
// Here is an odd number: 9
// Here is an odd number: 11
// Here is an odd number: 13
// Here is an odd number: 15
// Here is an odd number: 17
// Here is an odd number: 19
// Here is an odd number: 21
// Here is an odd number: 23
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// Here is an odd number: 31
// Here is an odd number: 33
// Here is an odd number: 35
// Here is an odd number: 37
// Here is an odd number: 39
// Here is an odd number: 41
// Here is an odd number: 43
// Here is an odd number: 45
// Here is an odd number: 47
// Here is an odd number: 49