const adder = (param) => console.log('adder', param)
const addtip = (param) => console.log('adder', param)
const taxes = (param) => console.log('taxes', param)

const compose = (...functions) => (...params) => {
  functions.forEach(pipe => pipe(params))
}
const composedFunction = compose(adder, addtip, taxes)

composedFunction('37')