"use strict";

//... rest of javascript code
console.log('Hello from external JavaScript!');

alert("Welcome to my website!");

var userInput = prompt('What is your favorite color?');
console.log('Great, my favorite color is also ' + userInput);

//Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
// When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

var littleMer = prompt('How many days are you renting The Little Mermaid?');
alert("You rented The Little Mermaid for " + littleMer +" days.");
console.log('You rented The Little Mermaid for ' + littleMer +' days');

var brotherBear = prompt('How many days are you renting Brother Bear?');
alert("You rented Brother Bear for " + brotherBear +" days.");
console.log('You rented Brother Bear for ' + brotherBear +' days');

var hercules = prompt('How many days are you renting Hercules?');
alert("You rented Hercules for " + hercules +" days.");
console.log('You rented The Hercules for ' + hercules +' days');

var rentRate = prompt('What is the daily rental fee per movie?');
alert("Daily rental fee per movie is: " + rentRate +" days.");
console.log('Daily rental fee per movie is: ' + rentRate +' days');

var costToRent = (littleMer * rentRate) + (brotherBear * rentRate) + (hercules * rentRate);
alert("Your total rental cost is: " + costToRent);
console.log('Your total rental cost is: ' + costToRent);


//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
//Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
//You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googlePay = prompt('How much does Google pay per hour?');
alert("Google pays " + googlePay +" per hour.");
console.log('Google pays ' + googlePay +' per hour');

var amazonPay = prompt('How much does Amazon pay per hour?');
alert("Amazon pays " + amazonPay +" per hour.");
console.log('Amazon pays ' + amazonPay +' per hour');

var facebookPay = prompt('How much does Facebook pay per hour?');
alert("Facebook pays " + facebookPay +" per hour.");
console.log('Facebook pays ' + facebookPay +' per hour');

var googleHrs = prompt('How many hours did you work for Google?');
alert("Google hours worked are " + googleHrs);
console.log('Google hours worked are ' + googleHrs);

var amazonHrs = prompt('How many hours did you work for Amazon?');
alert("Amazon hours worked are " + amazonHrs);
console.log('Amazon hours worked are ' + amazonHrs);

var facebookHrs = prompt('How many hours did you work for Facebook?');
alert("Facebook hours worked are " + facebookHrs);
console.log('Facebook hours worked are ' + facebookHrs);

var payToReceive = (googlePay*googleHrs)+(amazonPay*amazonHrs)+(facebookPay*facebookHrs);
alert("Your total payment is: " + payToReceive);
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

var classTimeFree = prompt('What time do you have available?');
alert("Class time available: " + classTimeFree);
console.log('Class time available: ' + classTimeFree);

var enrollStatus = (classSizeActual < classSizeFull) && (classTime == classTimeFree);
alert("I can enroll? " + enrollStatus);

console.log(classSizeActual < classSizeFull) && (classTime !== classTimeFree);

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
console.log('Premium member: ' + premiumMember);

var canPurchase = ((itemsPurchasedMin < itemsPurchasedAct && offerGoodDate >= purchaseDate) || (premiumMember = "yes" && offerGoodDate >= purchaseDate));
alert('I can purchase? ' + canPurchase);

console.log((itemsPurchasedMin < itemsPurchasedAct && offerGoodDate >= purchaseDate) || (premiumMember = "yes" && offerGoodDate >= purchaseDate));
