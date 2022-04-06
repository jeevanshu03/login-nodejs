const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/JIVANSHU',{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true},function(err) {
    if(err) throw err
    console.log("Successfully connected to DB");
})