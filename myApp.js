let express = require('express');
let app = express();
let moment = require('moment');
let bodyParser = require('body-parser');
require('dotenv').config();
const mySecret = process.env['MESSAGE_STYLE'];



app.use("/public", express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    let logs = req.method + " " + req.path + " - " + req.ip;
    console.log(logs)
    next();
  });

app.use(function (req, res, next){
  bodyParser.urlencoded({extended: false})
  next();
})

app.get('/', (req, res) => {
    res.sendFile( __dirname+"/views/index.html")
  })

app.get('/json', (req, res) => {
    let jsonFile = {"message": "Hello json"};
        if(process.env.MESSAGE_STYLE === "uppercase")
            jsonFile = {"message": "HELLO JSON"}
    
    res.json(jsonFile)
})

function getDateString(){
    return new Date().toString();
}

app.get('/now', function(req, res, next) {
    req.time = getDateString();

    next();
  }, function(req, res) {
    res.json({time: req.time});
});

app.get("/:word/echo", (req, res) => {
    let { word } = req.params;

    res.json({
      echo: word
    });
});

app.get("/name", function(req, res) {
    let firstName = req.query.first,
        lastName = req.query.last;
        
    res.json({
      name: `${firstName} ${lastName}`
    });
  });

app.post("/name", function (req, res){
  let fullname = req.body.first + " " + req.body.last;

  res.json(
    {
      name: `${fullname}`
    }
  );
})


















 module.exports = app;
