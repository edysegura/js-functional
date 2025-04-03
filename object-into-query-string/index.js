const coordinates = {
  lat: 45,
  lng: 6,
  alt: 100,
}

const convertToQueryString = (property) => {
  const [key, value] = property
  return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
}

const queryString = Object.entries(coordinates)
  .map(convertToQueryString)
  .join('&')

console.log(queryString) // lat=45&lng=6&alt=100

// Node.js version 10+ and modern browsers support URLSearchParams
console.log(new URLSearchParams(coordinates).toString()) // lat=45&lng=6&alt=100
