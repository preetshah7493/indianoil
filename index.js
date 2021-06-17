var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://associates.indianoil.co.in/PumpLocator/NearLocations',
  'headers': {
    'authkey': '166692AdPUjjTt59758b73',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Cookie': 'BIGipServerJboss_52.53_8080=rd1o00000000000000000000ffff0a924135o8080; TS011968e6=01d69c8eb59d43b66bcf6bb1b49a0409c28e8087c4d87f5e1e429a9f097c3f713743071b25fb264ecab17874dfab8e0d193843beea6f80db592a3591861ab3698cc128bf4b; TS011968e6028=01fabe9706bc389dde186e056888066e9b12e25d1dd424327e341de212cb60106b3a33a7b009f8db146146f4041b874120ab44011a'
  },
  form: {
    'latitude': '19.2812547',
    'longitude': '73.0482912'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
