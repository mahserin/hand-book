const express = require('express')
const cors = require('cors')
const router = require('./book.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

app.use('/book' , router)

module.exports = app