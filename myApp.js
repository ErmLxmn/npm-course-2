let express = require('express');
let app = express();


console.log(__dirname)
app.use("/public", express.static(__dirname+"/public"));

app.get('/', (req, res) => {
    res.sendFile( __dirname+"/views/index.html")
  })



























 module.exports = app;
