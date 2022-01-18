const express = require('express')
const router = express.Router()
const taskModel = require('./models/TaskSchema')

// Gets All Members
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/tasks', (req, res) => {
  taskModel.find({}, (err, tasks) => {
    if (tasks) {
      res.json(tasks)
    } else {
      res.status(400).send(err)
    }
  })
})

router.get('/tasks/:id', (req, res) => {
  taskModel.find({ id: req.params.id }, (err, task) => {
    if (task) {
      res.json(found)
    } else {
      res.status(400).send(err)
    }
  })
})

router.post('/newTask', async (req, res) => {
  const newTask = new taskModel(req.body)

  newTask.save((err) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json(newTask)
  })
})

router.patch('/edit/:id', async (req, res) => {
  // taskModel.findByIdAndUpdate(
  //   req.params.id,
  //   req.body,
  //   { new: true },
  //   (err, task) => {
  //     if (err) return res.status(400).send(err)
  //     return res.json(task)
  //   }
  // )
  try {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body)
    await task.save()
    res.json(task)
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
