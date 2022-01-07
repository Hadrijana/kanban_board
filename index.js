// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();



router.get("/", (req, res) => {
    app.use(express.static('public'));
    res.sendFile(path.join(process.cwd()+'/public/index.html'));
});

app.use("/", router);
app.listen(process.env.port || 8000);

console.log("Running at Port 8000");