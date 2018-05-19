console.log('hola');

let Twit = require('twit');
const config = require('./config');

let twit = new Twit(config);

twit.get('search/tweets', { q: 'bitcoin lang:es', count: 2 },
 function(err, data, response) {
    console.log(data)
  })