const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

/**
 * Middleware
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));

/**
 *
 * Routes
 */

app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.render("userForm.ejs");
});

app.use("/result", (req, res) => {
  let data = req.body;
  res.send(`Hello ${data?.name} you are now ${data?.age}`);
});

app.listen(3000);
