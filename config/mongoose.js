//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/todo_app');

//acquire the connection (to check if it's successful)
const db = mongoose.connection;

//error handling
db.on('error',console.error.bind(console,"Error found while connection database"));

db.once('open',function(){
    console.log("Database connected Successfully");
});

// exported the data
module.exports=db; 