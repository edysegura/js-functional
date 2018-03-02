const { getInPortuguese } = require('./translate.service')
const Bacon = require('baconjs')

const stream = new Bacon.Bus()

stream
  .flatMap(word => getInPortuguese(word))
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word))

stream.push('cat')
stream.push('meal')
stream.push('cow')
stream.push('sheep')
stream.push('dog')