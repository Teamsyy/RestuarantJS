// customer.js
class Customer {
  constructor(name, tableNumber, customerId) {
    this.name = name;
    this.tableNumber = tableNumber;
    this.customerId = customerId;
  }
}

let customerCounter = 1;
function createCustomer(name, tableNumber) {
  const customer = new Customer(name, tableNumber, customerCounter);
  customerCounter++;
  return customer;
}

module.exports = { createCustomer };
