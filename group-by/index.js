// prettier-ignore
const footballPlayers = [
  { gender: "M", name: "Karim Benzema", age: 29, club: "Real Madrid CF", country: "Spain" },
  { gender: "M", name: "Samir Nasri", age: 29, club: "Sevilla FC", country: "Spain" },
  { gender: "M", name: "Hatem Ben Arfa", age: 29, club: "PSG", country: "France" },
  { gender: "M", name: "Radamel Falcao", age: 27, club: "AS Monaco FC", country: "France" },
  { gender: "M", name: "Riyad Mahrez", age: 25, club: "Leicester City FC", country: "England" },
  { gender: "M", name: "Sofiane Feghouli", age: 26, club: "West Ham United", country: "England" },
  { gender: "M", name: "Neymar Jr.", age: 29, club: "Paris Saint-Germain FC", country: "Brazil" },
  { gender: "M", name: "Carlos Henrique Casimiro", age: 29, club: "Real Madrid CF", country: "Brazil" }
]

const playerByCountry = Object.groupBy(footballPlayers, (player) =>
  player.country.toLowerCase(),
)

console.table(playerByCountry['brazil'])
console.table(playerByCountry['england'])
