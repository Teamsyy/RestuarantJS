// order.js
const { getMenuItems } = require('./menu');

const orders = [];

function takeOrder(customer, menuItem, quantity) {
  const menuItems = getMenuItems();
  const selectedItem = menuItems.find((item) => item.name === menuItem);

  if (!selectedItem) {
    console.log(`Menu item '${menuItem}' not found.`);
    return;
  }

  const order = {
    customer: customer,
    item: selectedItem,
    quantity: quantity,
  };

  orders.push(order);
}

function getAllOrders() {
  return orders;
}

function calculateTotalBill(customer) {
  const customerOrders = orders.filter((order) => order.customer === customer);
  let totalBill = 0;

  for (const order of customerOrders) {
    totalBill += order.item.price * order.quantity;
  }

  return totalBill;
}

module.exports = { takeOrder, getAllOrders, calculateTotalBill };
