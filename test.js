
var request = require('superagent');

var url = 'https://api.imgur.com/3/gallery/random/random/1';

request
  .get(url)
  .auth('Client-ID', '92425f070056ef8')
  .end(function(err, res) {
    console.log(res);
});