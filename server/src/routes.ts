import express from 'express'
import {Request, Response} from 'express'
import path from "path"
const router = express.Router()
import  TaskModel from "./models/TaskModel"
import CategoryModel from "./models/CategoryModel"

// Gets All Members 
router.get('/', (req : Request, res : Response) => {
  res.sendFile(path.join(__dirname , '../', '../', 'public/dist/index.html'))
})

router.get('/categories', (req :Request, res : Response) => {
  CategoryModel.find({}, (err , tasks) => {
    if (tasks) {
      res.json(tasks)
    } else {
      res.status(400).send(err)
    }
  })
})

router.patch('/categories/:id', (req : Request, res : Response) => {
  CategoryModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, task) => {
      if (err) return res.status(400).send(err)
      return res.json(task)
    }
  )
})

router.get('/tasks', (req : Request, res : Response) => {
  TaskModel.find({}, (err , tasks) => {
    if (tasks) {
      res.json(tasks)
    } else {
      res.status(400).send(err)
    }
  })
})

router.get('/tasks/:id', (req : Request, res : Response) => {
  TaskModel.find({ id: req.params.id }, (err, task) => {
    if (task) {
      res.json(task)
    } else {
      res.status(400).send(err)
    }
  })
})

router.post('/newTask', (req : Request, res :Response ) => {
  const newTask = new TaskModel(req.body)

  newTask.save((err) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json(newTask)
  })
})

router.patch('/edit/:id', (req : Request, res : Response) => {
  TaskModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, task) => {
      if (err) return res.status(400).send(err)
      return res.json(task)
    }
  )
})

router.delete('/delete/:id', (req : Request, res :Response) => {
  TaskModel.findByIdAndRemove(req.params.id, null ,(err, task)=>{
    if (err) return res.status(400).send(err)
    return res.json(task)
  })
})

module.exports = router
