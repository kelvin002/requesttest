// const request = require('request')
const fetch = require("node-fetch");
// const async = require("async");

module.exports.apiresponse = function(){
  console.log('01: Started');
  const url = "https://jsonplaceholder.typicode.com/posts/42";

  console.log('02: reqest started');

const getData = async url => {
    try {
      const response = await fetch(url);
      const result1 = await response.json();
      console.log('03: '+ JSON.stringify(result1));
      return(JSON.stringify(result1));
    } catch (error) {
      console.log(error);
    }

  };
  result2 = getData(url);

  console.log('04: '+ JSON.stringify(result2));
  //console.log('05: '+ JSON.stringify(result1));

  apiresponse = '123';
  return apiresponse;
}
