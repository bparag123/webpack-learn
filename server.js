const express = require("express")


const app = express()

app.get("", (req, res) => {
    res.send("Hello Webpack")
})

app.listen(3000, ()=>{
    console.log("server is up and running on 3000")
})