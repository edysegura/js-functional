const items = [
  { name: 'New York Steak', price: 30.50 },
  { name: 'Bone shake', price: 13.50 },
  { name: 'Coffee', price: 3.22 }
]

const onlyPrice = item => item.price
const adder = (accumulator, currentValue) => accumulator + currentValue

const total = items
  .map(onlyPrice)
  .reduce(adder)

console.log(`Total: ${total}`)
