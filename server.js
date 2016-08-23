'use strict';

// Khoi tao
var express = require('express');
var app = express();
var path = require('path');

//Cau hinh
app.use(express.static(__dirname + '/client'));

app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/client/index.html'));
    });

//Start Server
app.listen(3000, function(){
  console.log("Server started at port 3000!");
});
