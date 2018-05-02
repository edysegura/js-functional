const items = [
  {name: 'New York Steak', price: 30.50},
  {name: 'Bone shake', price: 13.50},
  {name: 'Coffee', price: 3.22}
]

function taskExecutor(params, task) {
  return task(params)
}

function getSum(items) {
  const adder = (sum, item) => sum + item.price
  const result = items.reduce(adder, 0)
  return result
}

function addTip(value) {
  const result = value * 1.15; //adding 15% of tip
  return result
}

function addTax(value) {
  const result = value * 1.13; //adding 13% of HST
  return result
}

const tasks = [
  getSum,
  addTip,
  addTax
]

let total = tasks.reduce(taskExecutor, items)
console.log('Total: ' + total.toFixed(2))