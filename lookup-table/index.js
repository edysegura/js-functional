const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 39, name: 'Edy Segura', age: 34, group: 'admin' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
]

const indexingById = (accumulator, it) => {
  accumulator[it.id] = it
  return accumulator
}

const lookupTable = users.reduce(indexingById, {})

console.log(lookupTable)
console.log('Name for id 39: ', lookupTable[39].name)
