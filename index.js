// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const tasks = require('./Tasks')



router.get("/", (req, res) => {
    app.use(express.static('public'));
    res.sendFile(path.join(__dirname+'/public/index.html'));
   

});

router.get('/tasks', (req, res) => res.json(tasks));


app.use("/", router);
app.listen(process.env.port || 8000);

console.log("Running at Port 8000");