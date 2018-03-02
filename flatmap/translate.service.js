const fetch = require('node-fetch')
const Bacon = require('baconjs')

function getInPortuguese(word) {
  const apiKey = ''

  const endpoit =
    "https://www.googleapis.com" +
      "/language/translate/v2" +
      "?key=" + apiKey +
      "&source=en" +
      "&target=pt" +
      "&q=" + encodeURIComponent(word)

    const promise = fetch(endpoit)
      .then(response => response.json())
      .then(
        responseJson =>
          responseJson
            .data
            .translations[0]
            .translatedText
      )
      .catch(error => console.log(error))

  const stream = Bacon.fromPromise(promise)
  return stream
}

module.exports = {
    getInPortuguese
}