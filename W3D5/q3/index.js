const express = require("express");
const path = require("path");
const app = express();

/**
 * 
 * middleware
 */
app.use("/css", express.static(path.join(__dirname, 'templates','style')));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));


/**
 * 
 * Routing and middleware
 */
app.use("/form", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  console.log(__dirname+"templates/style")
  const cssLink = hour > 18 || hour < 6 ? "/css/night.css" : "/css/day.css";
  res.render("form.ejs", { csslink: cssLink });
});

app.listen(8000);
