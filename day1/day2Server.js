const express = require("express");

const app = express();

const port = 5000;
const logger = require("./middleware");
const index = require("./index");
const notfound = require("./notfound");
const morgan = require("morgan");
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use([logger, index, notfound]);

app.use(express.static("./public"));
app.use(morgan("dev"));
app.get("/", (req, res) => {
  console.log("Home");
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});
