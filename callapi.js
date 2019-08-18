const request = require('request')

module.exports.apiresponse = function(){
  console.log('01: Started')
  const options = {
//        url: 'https://www.reddit.com/r/funny.json',
      url: 'https://jsonplaceholder.typicode.com/posts/42',
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8',
          // 'User-Agent': 'my-reddit-client'
      }
  };
  console.log('02: reqest started')
  
  json2 = request(options, function(err, res, body) {
      let json = JSON.parse(body);
      console.log('03: '+ JSON.stringify(json));
      return JSON.stringify(json);
  });

console.log('04: '+JSON.stringify(json2));
apiresponse = '123';
return apiresponse;
}
