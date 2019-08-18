const express = require('express')
const app = express()
const callapi= require('./callapi4.js')
const PORT = 3000;

app.get('/', function (req, res) {
  // res.send('Hello, World!');
  // res.send('Next line');
  apiresult = callapi.apiresponse();
  res.send(apiresult);
  console.log("06: " +apiresult);
})

app.get('/about', function (req, res) {
  res.send('About, World!')
})

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));
