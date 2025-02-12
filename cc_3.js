// task 1 managing a product pricing system. //
let prices = [5,7,8,9,3];
prices.push(4);
prices.shift();
console.log( "new prices", prices);

// task 2  processing customer orders and updating order quantities.//

let orders = [6,8,3,4,9];
orders[2]+=5;
let totalorders = orders.reduce((sum,qty) => sum+qty,0);
console.log("updated orders",orders);
console.log ("total order count",totalorders); 

// Task 3 tracking employee performance data. //
let employee = {name: "itachi Uchiha", role: "Agent", performance:97, isActive: true}
employee.performancescore = 100;
employee.promotionEligible = true;
console.log("updated employee", employee);

// Task 4  collecting customer feedback data. //

let feedback = [
    {customerName: "Danny Fantom", feedbacktext:"hard worker!!", rating:8},
    {customerName: "Tony Stark", feedbacktext:"Vary smart but lazy", rating:6},
    {customerName: "Bruce Wayne", feedbacktext:"fast and efficient!!", rating:10
}]
feedback.push({ customerName: "Goku", feedbacktext:"amazing service", rating:7})
console.log ("customer feedback", feedback);

// Task 5  developing a system to track inventory details.
let inventory = { itemName : "ps5", stockCount: 15 , price: 500,
    calculateTotalValue: function(){return this.stockCount* this.price;}};
    console.log("inventory details",inventory);
    console.log("total inventory value",inventory.calculateTotalValue());
