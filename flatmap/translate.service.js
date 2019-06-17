const fetch = require('node-fetch')
const Bacon = require('baconjs')

function buildEndpoint(word) {
  const apiKey = process.env.API_KEY

  const endpoint =
    'https://www.googleapis.com' +
    '/language/translate/v2' +
    '?key=' + apiKey +
    '&source=en' +
    '&target=pt' +
    '&q=' +
    encodeURIComponent(word)

  return endpoint
}

function getInPortuguese(word) {
  const endpoint = buildEndpoint(word)

  const promise = fetch(endpoint)
    .then(response => response.json())
    .then(responseJson => responseJson.data.translations[0].translatedText)
    .catch(error => console.log(error))

  return Bacon.fromPromise(promise)
}

module.exports = {
  getInPortuguese
}
