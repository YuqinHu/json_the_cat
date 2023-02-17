const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (_error, _response, body) => {
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('breed not found');
    return;
  } else {
    console.log(data[0].description);
  }
});

