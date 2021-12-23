const express = require('express');
const mongoose = require('mongoose');
require('./app/utils/emp')
// require('./app/utils/connection')
const app = express();

app.use(express.json());


app.use('/users', require('./app/routes/routes.js'));

let port = process.env.port || 7870;

app.listen(port,function(req,res){
  console.log(`Server is running at port ${port}`);
});
