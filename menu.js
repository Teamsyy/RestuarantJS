// menu.js
class MenuItem {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

const menuItems = [];

function addMenuItem(item) {
  menuItems.push(item);
}

function getMenuItems() {
  return menuItems;
}

module.exports = { MenuItem, addMenuItem, getMenuItems };
