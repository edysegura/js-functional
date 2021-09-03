const names = [
  'Eric',
  'Hugão',
  'Lucas',
  'Edy',
  'Daniel',
  'Pedro',
  'Ana',
  'Evelin'
]

function regularPrint(name) {
  console.log('Name: ' + name)
}

function fancyPrint(name) {
  console.log(`💀 ${name} 💀`)
}

function matchFirstLetter(letter) {
  return name => name.charAt(0).toLowerCase() == letter.toLowerCase()
}

names
  .sort()
  .reverse()
  .filter(matchFirstLetter('e'))
  .forEach(fancyPrint)
