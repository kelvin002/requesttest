// const request = require('request')
const https = require("https");

module.exports.apiresponse = function(){
  console.log('01: Started')
  const url = 'https://jsonplaceholder.typicode.com/posts/42'

  console.log('02: reqest started')

  result2 = https.get(url, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
      body += data;
    });
    res.on("end", () => {
      let result1 = JSON.parse(body);
      console.log('03: '+ JSON.stringify(result1));
    });
    return '456';
  });

//console.log('04: '+ JSON.stringify(result2));
//console.log('05: '+ JSON.stringify(result1));

apiresponse = '123';
return apiresponse;
}
