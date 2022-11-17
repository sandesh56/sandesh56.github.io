const express = require("express");

const logger = require("morgan");

const app = express();
app.use(logger());

app.use("/", (req, res) => {
  let name = req.query.name;
  let age = req.query.age;

  if (!name) name = "people";
  if (!age) {
    res.send(`hello ${name} welcome!`);
  }
  res.send(`hello ${name} welcome!. Your age is ${age}`);
});

app.listen(3000);
