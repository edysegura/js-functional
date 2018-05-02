const adder = (param) => param + 1
const addtip = (param) => param * 1.15
const taxes = (param) => param * 1.13

const compose = (...functions) => (...params) => {
  return functions.map(pipe => pipe(params))
}
const composedFunction = compose(adder, addtip, taxes)

console.log(composedFunction('37'))