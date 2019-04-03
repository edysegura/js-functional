'use strict'

const convertToFahrenheit = t => t * 1.8 + 32

const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const fahrenheit = celsius.map(convertToFahrenheit)

console.log(fahrenheit)