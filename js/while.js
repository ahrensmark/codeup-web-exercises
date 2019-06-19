"use strict";
(function(){
// While loops #2
var x = 0;
var y = 0;
//var y = math.pow(2,x + 2);

while (x < 65536) {
    x = Math.pow(2, y+1);
    y++;
    console.log(x);

}

// While loops #3

var allCones = Math.floor(Math.random() * 50) + 50;
var soldToCustomer = 0;
var totalSold = 0;

do {
    soldToCustomer = Math.floor(Math.random() * 5) + 1;
    console.log(soldToCustomer + " Cones sold");
    totalSold = soldToCustomer + totalSold;

} while (totalSold < allCones);
if (totalSold >= allCones) {
    var cannotSell = totalSold - allCones;
}
console.log("Cannot sell you " + soldToCustomer + " cones, I only have " + cannotSell + " left.");
console.log(allCones + " is how many cones I had to sell");
console.log("Yay. I sold them all!");
})();