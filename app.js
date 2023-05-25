var express = require('express');

const mongoose=require('mongoose')
const key=require('./config/key')
var index = require('./routers/tambola_Master');
var user=require('./routers/user')

var app = express();

mongoose.connect(key.url, (err, db)=>{
  console.log("Connectiong to db")
})



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', index);
app.use('/user', user)


app.listen(4000)