const express = require('express')
const router = express.Router()
const taskModel = require('./models/TaskSchema')

// Gets All Members
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/tasks', async (req, res) => {
  const tasks = await taskModel.find({})

  try {
    res.json(tasks)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/tasks/:id', async (req, res) => {
  const found = await taskModel.find({ id: req.params.id })
  if (found) {
    res.json(found)
  } else {
    res.status(400).json({ msg: 'task not found' })
  }
})

router.post('/newTask', async (req, res) => {
  const newTask = new taskModel(req.body)
  try {
    await newTask.save()
    res.send(newTask)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.patch('/edit/:id', async (req, res) => {
  try {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body)
    await task.save()
    res.send(task)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const task = await taskModel.findByIdAndRemove(req.params.id)

    if (!task) res.status(404).send('No item found')
    res.status(200).send()
  } catch (error) {
    res.status(500).send(error)
  }
})

module.exports = router
