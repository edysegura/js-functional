
const names = [
  'Diego',
  'Dulval',
  'João',
  'Edy',
  'Christian',
  'Pedro',
  'Ana',
  'Evelin'
]

function regularPrint(name) {
  console.log('Name: ' + name)
}

function fancyPrint(name) {
  console.log('*****> ' + name + ' <*****')
}

function matchFirstLetter(letter) {
  return (name) => name.charAt(0).toLowerCase() == letter.toLowerCase()
}

names
  .forEach(regularPrint)

names
  .sort()
  .reverse()
  .filter(matchFirstLetter('e'))
  .forEach(fancyPrint)