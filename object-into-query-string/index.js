'use strict'

const coordinates = {
  lat: 45,
  lng: 6,
  alt: 100
}

const convertToQueryString = param => {
  const [ key, value ] = param
  return encodeURIComponent(key) + '=' + encodeURIComponent(value)
}

const queryString = Object.entries(coordinates)
  .map(convertToQueryString)
  .join('&')

console.log(queryString)
