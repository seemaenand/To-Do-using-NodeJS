//requiring express to set up th express server
const express = require('express');
// setting the path
 const path = require('path');

//  using express
const app = express();

// setting up the database
const db=require('./config/mongoose');

// defining the port
const port = 8000;

// setting the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// using the data
app.use(express.urlencoded());

// using the static files
app.use(express.static('./assets'));

// defining the routers
app.use('/', require('./routers'));

// make the app listen to the port
app.listen(port, function(err){
    if(err){
        console.log(`Error in the port : ${err}`)
    }
    console.log(`Server running successfully on port : ${port}`)
})