const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

/**
 * Url parser
 */

const urlParser = bodyParser.urlencoded({ extended: false });
/**
 * Middleware
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use(urlParser);

/**
 *
 * Routes
 */

app.get("/", (req, res) => {
  res.render("userForm.ejs");
});

app.use("/result", (req, res) => {
  let data = req.body;
  res.render("result", { name: data?.name, age: data?.age });
});

app.listen(3000);
