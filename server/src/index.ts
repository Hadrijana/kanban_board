import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@kanbanboard.yk6eo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(connectionString, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('mongodb is connected')
  }
})

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
const p=path.join(__dirname , '../', '../', 'public')

app.use(express.static(p))


app.use('/', require('./routes'))

app.listen(process.env.port || 8000)

console.log('Running at Port 8000')
