
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

function findByFirstLetter(letter) {
    return function (name) {
        return name[0].toLowerCase() == letter.toLowerCase()
    }
}

// names.forEach(regularPrint)

names
    .sort()
    .reverse()
    .filter(findByFirstLetter('e'))
    .forEach(fancyPrint)