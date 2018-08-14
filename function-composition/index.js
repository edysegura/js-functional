const adder  = param => param + 1
const addTip = param => param * 1.15
const addTax = param => param * 1.13

const compose = (...functions) => (...params) => {
  return functions.map(pipe => pipe(params))
}
const composedFunction = compose(adder, addTip, addTax)

console.log(composedFunction('37'))
