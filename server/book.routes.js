const express = require('express')

const controller = require('./book.controller')


const router = express.Router()

router.route('/')
.get(controller.getAll)
.post(controller.addBook)

router.route('/:id')
.delete(controller.deleteBook)

module.exports = router