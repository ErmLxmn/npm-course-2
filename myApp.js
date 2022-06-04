let express = require('express');
let app = express();
let moment = require('moment');
require('dotenv').config();
const mySecret = process.env['MESSAGE_STYLE']



app.use("/public", express.static(__dirname+"/public"));


app.use(function(req, res, next) {
    let format = req.method + " " + req.path + " - " + req.ip;
    console.log(format)
    next();
  });

app.get('/', (req, res) => {
    res.sendFile( __dirname+"/views/index.html")
  })



app.get('/json', (req, res) => {
    let jsonFile = {"message": "Hello json"};
        if(process.env.MESSAGE_STYLE === "uppercase")
            jsonFile = {"message": "HELLO JSON"}
    
    res.json(jsonFile)
})

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
  }, function(req, res) {
    res.send({time: req.time});
  });






















 module.exports = app;
