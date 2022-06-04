let express = require('express');
let app = express();


console.log(__dirname)

app.get('/', (req, res) => {
    res.send( __dirname+"/views/index.html")
  })



























 module.exports = app;
