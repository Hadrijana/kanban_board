const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use('/', require('./routes'))
app.listen(process.env.port || 8000)

console.log('Running at Port 8000')
