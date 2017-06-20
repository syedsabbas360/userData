const express = require('express');
const path = require('path');
// importing the data.js file
const data = require('./data.js')
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')
//Listening on root
app.get('/data', function (req, res) {
  // accessing the users inside the data.js file
    res.render('index',{users:data.users})
})


//my notes: create another app.get to only show unemployed users
//insert this into another div if necessary in your mustache file
app.listen(3000, function () {
  console.log('Successfully started express application!');
})
