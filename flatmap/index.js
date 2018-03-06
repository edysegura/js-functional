const Bacon = require('baconjs')
const { getInPortuguese } = require('./translate.service')

const stream = new Bacon.Bus()

stream
  .flatMap(word => getInPortuguese(word))
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word))

const words = ['cat', 'meal', 'cow', 'sheep']
words.forEach(word => stream.push(word))
