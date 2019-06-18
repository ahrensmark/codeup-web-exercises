"use strict";
//var x = 5;

//if (x === 5) {
  //  console.log("X is equal to five.")
//}

//function isItANumber(parameter) {
//    if (isNaN(parameter) === false) {
//        return "that's a number!"
//    } else {
//        return "That's not a number!"
//    }
//}
   // console.log(isItANumber(77));
   // console.log(isItANumber(BOB));


//var haveCow = false;
//var haveGoat = true;

//if (haveCow === true) {
  //  console.log("Milking Betty");
//} else if (haveGoat === true){
    //console.log("Milking Billy Sue");
//} else {
  //  console.log("Heading to Kroger");
//}

//function isThisThirtyFive(parameter) {
    //if(parameter > 35) {
      //  return "The number " + parameter + " is greater than 35."
    //} else if (parameter < 35) {
      //  return "The number " + parameter + " is less than 35."
    //} else if (parameter === 35) {
      //  return "This is 35.";
    //} else {
      //  return "That's not a number."
    //}
  //  return (isNaN(parameter)) ? "That's not a number." : "That's a number.";
//}

//console.log(isThisThirtyFive(34));
//console.log(isThisThirtyFive(36));
//console.log(isThisThirtyFive(35));
//console.log(isThisThirtyFive("Tim"));

//var doWeHaveMilk = true;
//var action = (doWeHaveMilk) ? "Let's have some cereal." : "Going to Aldi's";
//console.log(action);

//var color = prompt('What is your favorite color?').toLocaleLowerCase();
//switch (color) {
  //  case "green":
    //    alert("What a coincidence, that's my favorite too.");
      //  break;
    //case "orange":
      //  alert("That's my sister's favorite.");
     //   break;
   // default:
     //   alert(color + " is a great color too.");
       // break;
//}

//var animal = prompt("What animal are we milking?");
//switch (animal) {
  //  case "cow":
  //      console.log("Milking Betty Lue");
  //      break;
  //  case "goat":
  //      console.log("Milking Bertha");
  //      break;
  //  case "camel":
  //      console.log("Milking Ophelia");
  //  default:
  //      console.log("Go to Food Lion");
  //      break;
//}

//var favMeat = prompt("what is your favorite lunchmeat?");
//switch (favMeat) {
 //   case "olive loaf":
   //     alert("Bold choice");
     //   break;
 //   case "brisket":
 //       alert("great choice");
 //       break;
 //   default:
 //       alert(favMeat + ", are you crazy?");
 //       break;

//}
//=====================================================================
/**
 * TODO#1:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var userWantsToContinue = confirm('Would you like to enter a number?');
if (userWantsToContinue === true) {
var aNumber = Number(prompt("Please enter a number."));
if (aNumber%2 == 0){
    alert(aNumber + " is even");
} else {
    alert(aNumber + " is odd");
}
alert(aNumber + " + 100 = " + (aNumber + 100));
if (aNumber >= 0) {
    alert(aNumber + " is positive.");
} else {
    alert(aNumber + " is negative");
}

/* ########################################################################## */

/**
 * TODO#2:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var color = "red";

function analyzeColor(color) {
    if(color === "blue") {
    alert("blue is the color of the sky");
} else if(color === "red") {
    alert("Strawberries are red");
} else if(color === "cyan") {
    alert("I don't know anything about cyan");
}
}

console.log(analyzeColor(blue));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = color[Math.floor(Math.random() * color.length)];
/**
 * TODO#3:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO#4:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(randomColor) {
  switch(randomColor) {
    case "blue":
        return "blue is the color of the sky";
        break;
    case "red":
        return "Strawberries are red";
        break;
    case "cyan":
        return "I don't know anything about cyan";
        break;
    default:
        return color + " is beautiful";
 }
}


/**
 * TODO#5:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var color = prompt("What is your favorite color?");
   alert("Your favorite color is: " + color);


/* ########################################################################## */

/**
 * TODO#6:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var luckyNumber = Number(prompt("Enter the random number:"));
var totalAmount = Number(prompt("What was the purchase total?"));
var discountNone = 0;
var discount1 = .1;
var discount2 = .25;
var discount3 = .35;
var discount4 = .5;
var dicount6 = 1;
function calculateTotal(luckyNum, initialTotal) {
    Switch (luckNum) {
    case 0:
        return initalTotal;
        case 1:
            return initialTotal *.9;
        case 2:
            return initialTotal *.75;
        case 3:

        case 4:

        default:
            return initialTotal * 0;
    }
}
    console.log(calculateTotal(o,100));

/**
 * TODO#7:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userTotal = Number(prompt("What was your total today"));
alert("Your luck number was " + luckyNumber + "meaning you pay " + calculateTotal(luckyNumber,initialPrice).toFixed(2))

