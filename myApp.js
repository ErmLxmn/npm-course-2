let express = require('express');
let app = express();
require('dotenv').config();


app.use("/public", express.static(__dirname+"/public"));

app.get('/', (req, res) => {
    res.sendFile( __dirname+"/views/index.html")
  })



app.get('/json', (req, res) => {
    let jsonFile = {"message": "Hello json"};
        if(process.env.MESSAGE_STYLE === "uppercase")
            jsonFile = {"message": "Hello json".toLocaleUpperCase()}
    
    res.json(jsonFile)
})























 module.exports = app;
