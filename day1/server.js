const express = require("express");

const app = express();

const port = 3000;

app.get("/",(req,res) => {
    res.send("This is get method")
})

app.post("/post",(req,res) => {
    res.send("This is post method")
})

app.put("/put",(req,res) => {
    const method = req.method;
    console.log(method);
    res.send(`This is ${method} method`)
})

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`)
})
