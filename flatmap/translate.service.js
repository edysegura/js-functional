const fetch = require('node-fetch')
const Bacon = require('baconjs')

function buildEndpoint(word) {
  const translateAPI = 'https://www.googleapis.com/language/translate/v2'
  const apiKey = process.env.API_KEY
  const source = 'en'
  const target = 'pt'
  const encodedWord = encodeURIComponent(word)
  const query = `?key=${apiKey}&source=${source}&target=${target}&q=${encodedWord}`
  const endpoint = `${translateAPI}/${query}`

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
