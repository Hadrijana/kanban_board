const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  column: String,
  categoryId: Number,
})

module.exports = taskSchema
