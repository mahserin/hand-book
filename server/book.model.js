const mongoose = require('mongoose')

const schema = mongoose.Schema({
title : String ,
author : String , 
price : String
}, {timestamps : true})

const model = mongoose.model('books' , schema)

module.exports = model