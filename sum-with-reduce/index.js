"use strict";

const items = [
  {name: 'New York Steak', price: 30.50},
  {name: 'Bone shake', price: 13.50},
  {name: 'Coffee', price: 3.22}
];

const adder = (value, item) => value += item.price;
const initialValue = 0;

const total = items.reduce(adder, initialValue);
console.log('Total: ' + total);
