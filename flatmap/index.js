'use strict'

import Bacon from 'baconjs'
import { getInPortuguese } from './translate.service.js'

const stream = new Bacon.Bus()

stream
  .flatMap(word => getInPortuguese(word))
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word))

const words = ['cat', 'meal', 'cow', 'sheep']
words.forEach(word => stream.push(word))
