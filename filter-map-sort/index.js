"use strict"

const collection = [
  { name: 'Lidy', gender: 'female' },
  { name: '', gender: 'unknown' },
  { name: 'Guto', gender: 'male' },
  { name: 'Daniel', gender: 'male' },
  { name: '', gender: 'unknown' },
  { name: 'Edy', gender: 'male' },
  { name: 'Udit', gender: 'male' },
  { name: 'Scott', gender: 'male' },
  { name: '', gender: 'unknown' },
  { name: '', gender: 'unknown' },
  { name: 'Colin', gender: 'male' },
  { name: 'Luciano', gender: 'male' }
];

const hasName = item => !!item.name //it outputs a boolean
const onlyName = item => item.name
const addFirula = name => `-> ${name.toUpperCase()} <-`

const orderedNames = collection
                      .filter(hasName)
                      .map(onlyName)
                      .map(addFirula)
                      .sort()

console.log(orderedNames)
