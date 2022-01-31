import express from 'express'
import {Request, Response, NextFunction} from 'express'
import path from "path"
const router = express.Router()
import  TaskModel from "./models/TaskModel"
import CategoryModel from "./models/CategoryModel"
import UserModel from "./models/UserModel"
import passport from 'passport'

function isLoggedIn(req : Request, res : Response, next:  NextFunction) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

// Gets All Members 
router.get('/', isLoggedIn , (req : Request, res : Response) => {
  res.sendFile(path.join(__dirname ,  'client/index.html'))
})

router.get('/login', (req : Request, res : Response) => {
  res.sendFile(path.join(__dirname ,  'client/signin.html'))
})



router.post("/register", (req : Request, res : Response)=>{
  console.log( req.body.password[0]);
  
  // const passwords = req.body.password;
  // if(passwords[0] !== passwords[1]){

  //   res.json({ error:"Passwords are not the same"})
  // }
  const password =  req.body.password
  UserModel.register(new UserModel({username: req.body.username}), req.body.password, (err, user)=>{
    if(user){
      passport.authenticate('local')(req, res, ()=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/');
      })
    }
    else{
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
  } )
})


router.post('/login', passport.authenticate('local'), (req, res) => {
  res.statusCode = 200;

  res.redirect('/');
});


router.get('/categories', isLoggedIn, (req :Request, res : Response) => {
  CategoryModel.find({}, (err , tasks) => {
    if (tasks) {
      res.json(tasks)
    } else {
      res.status(400).send(err)
    }
  })
})

router.patch('/categories/:id', isLoggedIn, (req : Request, res : Response) => {
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

router.get('/tasks', isLoggedIn, (req : Request, res : Response) => {
  TaskModel.find({}, (err , tasks) => {
    if (tasks) {
      res.json(tasks)
    } else {
      res.status(400).send(err)
    }
  })
})

router.get('/tasks/:id', isLoggedIn, (req : Request, res : Response) => {
  TaskModel.find({ id: req.params.id }, (err, task) => {
    if (task) {
      res.json(task)
    } else {
      res.status(400).send(err)
    }
  })
})

router.post('/newTask', isLoggedIn,  (req : Request, res :Response ) => {
  const newTask = new TaskModel(req.body)

  newTask.save((err) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json(newTask)
  })
})

router.patch('/edit/:id', isLoggedIn, (req : Request, res : Response) => {
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

router.delete('/delete/:id', isLoggedIn, (req : Request, res :Response) => {
  TaskModel.findByIdAndRemove(req.params.id, null ,(err, task)=>{
    if (err) return res.status(400).send(err)
    return res.json(task)
  })
})



module.exports = router
