let express = require('express');
let app = express();


app.use("/public", express.static(__dirname+"/public"));

app.get('/', (req, res) => {
    res.sendFile( __dirname+"/views/index.html")
  })



app.get('/json', (req, res) => {
    let jsonFile = {"message": "Hello json"};
    res.json(jsonFile)
})























 module.exports = app;
