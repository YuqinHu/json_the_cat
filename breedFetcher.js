const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, _response, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      callback(error, data[0].description);
    } else {
      callback(null, null)
    }
  });
};

module.exports = { fetchBreedDescription };