
require('./model/db');
var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
var apiroutes = require('./route/route');;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/dist/project1'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/project1/index.html'));
});

app.use('/', apiroutes);


app.listen(process.env.PORT || 8080, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("App started at 8080");
    }
});
