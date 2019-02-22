'use strict'

const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
]

const lookupTable = users.reduce((accumulator, it) => (accumulator[it.id] = it, accumulator), {})

console.log(lookupTable)
console.log(lookupTable[11].name)
