// const express = require('express')
// const path = require('path')
import express from 'express'
import path from "path"
const router = express.Router()
import  TaskModel from "./models/TaskModel"
import CategoryModel from "./models/CategoryModel"

// Gets All Members 
router.get('/', (req : express.Request, res : express.Response) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/categories', (req : express.Request, res : express.Response) => {
  CategoryModel.find({}, (err , tasks) => {
    if (tasks) {
      res.json(tasks)
    } else {
      res.status(400).send(err)
    }
  })
})

router.get('/tasks', (req : express.Request, res : express.Response) => {
  TaskModel.find({}, (err , tasks) => {
    if (tasks) {
      res.json(tasks)
    } else {
      res.status(400).send(err)
    }
  })
})

router.get('/tasks/:id', (req : express.Request, res : express.Response) => {
  TaskModel.find({ id: req.params.id }, (err, task) => {
    if (task) {
      res.json(task)
    } else {
      res.status(400).send(err)
    }
  })
})

router.post('/newTask', (req , res ) => {
  const newTask = new TaskModel(req.body)

  newTask.save((err) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json(newTask)
  })
})

router.patch('/edit/:id', (req : express.Request, res : express.Response) => {
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

router.delete('/delete/:id', (req : express.Request, res : express.Response) => {
  TaskModel.findByIdAndRemove(req.params.id, (err: object, task: object)=>{
    if (err) return res.status(400).send(err)
    return res.json(task)
  })
})

module.exports = router
