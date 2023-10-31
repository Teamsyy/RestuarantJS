// main.js
const { MenuItem, addMenuItem, getMenuItems } = require('./menu');
const { createCustomer } = require('./customer');
const { takeOrder, getAllOrders, calculateTotalBill } = require('./order');

// Create menu items
addMenuItem(new MenuItem('Burger', 10, 'A delicious burger'));
addMenuItem(new MenuItem('Pizza', 12, 'A classic pizza'));
addMenuItem(new MenuItem('Pasta', 8, 'Tasty pasta dish'));
addMenuItem(new MenuItem('Salad', 6, 'Healthy salad'));
addMenuItem(new MenuItem('Soda', 2, 'Refreshing soda'));

// Create customers
const customer1 = createCustomer('John', 1);
const customer2 = createCustomer('Alice', 2);
const customer3 = createCustomer('Bob', 3);

// Place orders
takeOrder(customer1, 'Burger', 2);
takeOrder(customer1, 'Salad', 1);
takeOrder(customer2, 'Pizza', 1);
takeOrder(customer3, 'Pasta', 2);
takeOrder(customer3, 'Soda', 3);

// Display all orders
console.log('All Orders:');
console.log(getAllOrders());

// Calculate and display total bills for each customer
console.log('\nTotal Bills:');
console.log(`${customer1.name}'s total bill: $${calculateTotalBill(customer1)}`);
console.log(`${customer2.name}'s total bill: $${calculateTotalBill(customer2)}`);
console.log(`${customer3.name}'s total bill: $${calculateTotalBill(customer3)}`);
