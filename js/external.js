"use strict";

//... rest of javascript code
console.log('Hello from external JavaScript!');

//alert("Welcome to my website!");

//var userInput = prompt('What is your favorite color?');
//console.log('Great, my favorite color is also ' + userInput);

//Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
 var littlemer = 3;
 var brotherbear = 5;
 var hercules = 1;
 var costToRent = (littlemer+brotherbear+hercules)*3;
console.log(costToRent);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
//Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
//You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 var googlePay = 400;
 var amazonPay = 380;
 var facebookPay = 350;
 var googleHrs = 6;
 var amazonHrs = 4;
 var facebookHrs = 10;
 var payToReceive = (googlePay*googleHrs)+(amazonPay*amazonHrs)+(facebookPay*facebookHrs);
 console.log(payToReceive);

//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classSizeFull = prompt('What is the maximum class size');
alert("Maximum class size is: " + classSizeFull);
console.log('Maximum class size is: ' + classSizeFull);

var classSizeActual = prompt('How many students are currently enrolled in this class?');
alert("Current class enrollment is: " + classSizeActual);
console.log('Actual class size is:  ' + classSizeActual);

var classTime = prompt('What time is this class HH:MM?');
alert("Class time is: " + classTime);
console.log('Class time is:  ' + classTime);

var classTimeBusy = prompt('What time do you have available?');
alert("Class time available: " + classTimeBusy);
console.log('Class time available: ' + classTimeBusy);

console.log(classSizeActual < classSizeFull) && (classTime !== classTimeBusy);

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
var itemsPurchasedMin = prompt('What is the minimum purchase quantity for non-Premium members?');
alert("Minimum purchase quantity for non-Premium members is : " + itemsPurchasedMin);
console.log('Maximum class size is: ' + itemsPurchasedMin);

var itemsPurchasedAct = prompt('How many items did you purchase?');
alert("How many items did you purchase? " + itemsPurchasedAct);
console.log('How many items did you purchase? ' + itemsPurchasedAct);

var offerGoodDate = prompt('Date offer ends MM/DD/YY?');
alert("Offer ends date: " + offerGoodDate);
console.log('Offer ends date: ' + offerGoodDate);

var purchaseDate = prompt('Date purchases:');
alert("Date purchased: " + purchaseDate);
console.log('Date purchased: ' + purchaseDate);

var premiumMember = prompt('Are you a Premium member Yes or No?');
alert("Premium member? " + premiumMember);
console.log('Premium memeber: ' + premiumMember);

console.log((itemsPurchasedMin < itemsPurchasedAct && offerGoodDate >= purchaseDate) || (premiumMember = "yes" && offerGoodDate >= purchaseDate));
