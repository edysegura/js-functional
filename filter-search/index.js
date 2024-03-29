const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
]

const searchByName = name => user => {
  const caseInsensitive = 'i'
  const pattern = new RegExp(name, caseInsensitive)
  return pattern.test(user.name)
}

const criteria = 'am'
const result = users.filter(searchByName(criteria))

console.log('Searching by: ' + criteria)
console.table(result)
