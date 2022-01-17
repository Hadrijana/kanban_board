const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

// const mongoose = require('mongoose')
// const tasksSchema = require('./TaskSchema.js')
// const Task = mongoose.model('task', tasksSchema, 'task')
// const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@kanbanboard.yk6eo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

// async function createTask(taskTitle) {
//   return new Task({
//     id: Date.now(),
//     title: taskTitle,
//     description: '',
//     column: 'to-do-list',
//     categoryId: 0,
//   }).save()
// }

// ;(async () => {
//   const connector = mongoose.connect(connectionString)
//   let task = await createTask('second mongoDB task')
//   // console.log(task)
//   process.exit(0)
// })()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use('/', require('./routes'))
app.listen(process.env.port || 8000)

console.log('Running at Port 8000')
