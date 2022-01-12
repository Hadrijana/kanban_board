const express = require('express')
const router = express.Router()
const tasks = require('./Tasks.json')
const fs = require('fs')

writeToFile = () => {
  fs.writeFile('./Tasks.json', JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
}

// Gets All Members
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/tasks', (req, res) => res.json(tasks))

router.get('/tasks/:id', (req, res) => {
  const found = tasks[req.params.id]

  if (found) {
    res.json(tasks[req.params.id])
  } else {
    res.status(400).json({ msg: 'task not found' })
  }
})

router.post('/newTask', (req, res) => {
  const newTask = req.body
  const id = req.body.id
  tasks[id] = newTask
  writeToFile()
  res.json({ msg: 'new task added' })
})
router.patch('/edit/:id', (req, res) => {
  const found = tasks[req.params.id]

  if (found) {
    tasks[req.params.id].title = req.body.title
    writeToFile()
    res.json(tasks[req.params.id])
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }
})

router.delete('/delete/:id', (req, res) => {
  const found = tasks[req.params.id]

  if (found) {
    delete tasks[req.params.id]
    writeToFile()

    res.json({ msg: 'item deleted' })
  } else {
    res.status(400).json({ msg: 'task not found' })
  }
})

module.exports = router
