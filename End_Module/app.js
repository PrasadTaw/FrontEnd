const express = require("express")
const app = express();
const bodyparser = require("body-parser")
const router = require("./router/routers.js")



app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))

app.use("/", router);

app.listen(3002, () => {
    console.log("application started running on port 3002");
})

module.exports = app;