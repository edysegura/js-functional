const convertToFahrenheit = celsiusDegrees => celsiusDegrees * 1.8 + 32
const formatTemperature = temperature => `${temperature.toFixed(2)} °F`

const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const fahrenheit = celsius
  .map(convertToFahrenheit)
  .map(formatTemperature)

console.table(fahrenheit)