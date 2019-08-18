// const request = require('request')
const axios = require("axios");
const async = require("async");

module.exports.apiresponse = function(){
  console.log('01: Started');
  const url = "https://jsonplaceholder.typicode.com/posts/42";

  console.log('02: reqest started');

const getData = async url => {
    try {
      const response = await axios.get(url);
      const result1 = response.data;
      console.log('03: '+ JSON.stringify(result1));
      return(JSON.stringify(result1));
    } catch (error) {
      console.log(error);
    }
  };

  async.series([
    result2 = getData(url),
    console.log('04: '+ JSON.stringify(result2))
    //console.log('05: '+ JSON.stringify(result1));
    ],
    function(err,results) {
      console.log(results);
    }
  );

  apiresponse = '123';
  return apiresponse;
}
