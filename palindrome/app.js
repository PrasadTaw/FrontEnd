const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const p = require("./module/palindrome")

app.use(bodyparser.urlencoded({extended: false}))

app.get("/", (req, resp) => {
    resp.sendFile("public/index.html", {root: __dirname})
})

app.get("/check", (req, resp) =>{
    var str = req.query.b1;
    resp.send(p.checker(str))
})

app.listen(3002, () =>{
    console.log("Server started running on port 3002");
})

module.exports = app;


