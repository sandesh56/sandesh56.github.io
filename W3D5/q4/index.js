const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const urlEncoded = bodyParser.urlencoded({ extended: false });
/**
 *
 * middleware
 */
app.use("/css", express.static(path.join(__dirname, "templates", "style")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use(urlEncoded);
/**
 *
 * Routing and middleware
 */
app.use("/form", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  const cssLink = hour > 18 || hour < 6 ? "/css/night.css" : "/css/day.css";
  res.render("form.ejs", { csslink: cssLink });
});

app.use("/result", (req, res) => {
  let data = req.body;
  res.redirect(`/output?name=${data?.name}&age=${data?.age}`);
});

app.use("/output", (req, res) => {
  const name = req.query.name;
  const age = req.query.age;

  res.send(`hello ${name} you are now ${age}`);
});

app.listen(8000);
