const peopleList = [
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
]

const hasName = item => !!item.name
const addFirula = item => ({ ...item, name: `🎀 ${item.name.toUpperCase()} 🎀` })
const byAlphabeticalOrder = (personA, personB) => personA.name.localeCompare(personB.name)

const orderedNames = peopleList
  .filter(hasName)
  .map(addFirula)
  .sort(byAlphabeticalOrder)

console.table(orderedNames)
