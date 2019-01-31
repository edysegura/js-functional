'use strict'

const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
]

const searchByName = name => user => {
  return new RegExp(name, 'i').test(user.name)
}

const result = users.filter(searchByName('am'))

console.log(result)
