const fetch = require('node-fetch')
const Bacon = require('baconjs')

function getInPortuguese(word) {
  const apiKey = 'AIzaSyBiWb2BcX3XPtKdbi7nllyiH1tZYQrEt0M'

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

const stream = new Bacon.Bus()
stream
  .flatMap(word => getInPortuguese(word))
  .map(word => word.toUpperCase())
  .onValue(word => console.log(word))

stream.push('cat')
stream.push('meal')
stream.push('cow')