import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import passport from 'passport'
import expressSession from 'express-session'
import UserModel from './models/UserModel'
import {UserDoc} from './models/UserModel'
import crypto from 'crypto'
import LocalStrategy from "passport-local"
import {NativeError} from 'mongoose'

declare global{
  namespace Express {
    interface User {
      username: string;
      _id? : string;
    }
  }
}


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
app.use(expressSession({
  secret: 'dupa',
  resave : false, 
  saveUninitialized: true
}))

app.use(passport.initialize());

app.use(passport.session());


passport.use('local', new LocalStrategy.Strategy(UserModel.authenticate()));


passport.serializeUser((user , done)=>{
  done(null, user._id)
});

// passport.use(new LocalStrategy.Strategy({ usernameField: "email" }, (email, password, done) => {
//   UserModel.findOne({ email: email.toLowerCase() }, (err: NativeError, user: UserDoc) => {
//       if (err) { return done(err); }
//       if (!user) {
//           return done(undefined, false, { message: `Email ${email} not found.` });
//       }
//       user.verifyPassword(password, (err: Error, isMatch: boolean) => {
//           if (err) { return done(err); }
//           if (isMatch) {
//               return done(undefined, user);
//           }
//           return done(undefined, false, { message: "Invalid email or password." });
//       });
//   });
// }));

passport.deserializeUser((id : string, done)=> {
  UserModel.find({_id: id}, (err , user : UserDoc)=>{
    done(err, user);
  });
})


app.use(express.urlencoded({ extended: false }))
const p=path.join(__dirname , 'client')

app.use(express.static(p))


app.use('/', require('./routes'))

app.listen(process.env.port || 8000)

console.log('Running at Port 8000')
