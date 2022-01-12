const express = require('express')
const router = express.Router()
const tasks = require('./Tasks')

// Gets All Members
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/tasks', (req, res) => res.json(tasks))

router.get('/tasks/:id', (req, res) => {
  const found = tasks.some((task) => task.id === parseInt(req.params.id))

  if (found) {
    res.json(tasks.filter((task) => task.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({ msg: 'task not found' })
  }
})

router.post('/newTask', (req, res) => {
  const newTask = req.body
  tasks.push(newTask)
  res.json(tasks)
})

// router.delete('tasks/:id', (req, res) => {
//   const found = tasks.some((task) => task.id === parseInt(req.params.id))

//   if (found) {
//     res.json({
//       msg: 'Member deleted',
//       members: tasks.filter((member) => !idFilter(req)(member)),
//     })
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
//   }
// })

module.exports = router
