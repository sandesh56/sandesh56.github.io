const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const urlEncoded = bodyParser.urlencoded({ extended: false });

const session = require("express-session");
/**
 *
 * middleware
 */
app.use("/css", express.static(path.join(__dirname, "templates", "style")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "templates"));
app.use(urlEncoded);
app.use(
  session({
    secret: "imp",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 20000 },
  })
);
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


app.post("/result", (req, res) => {
  let data = req.body;
  let name = data?.name;
  let age = data?.age;
  if (name && age) {
    let session = req.session;
    session.name = name;
    session.age = age;
  }
  res.redirect(`/output`);
});

app.use("/output", (req, res) => {
  let sess = req.session;
  res.send(`hello ${sess?.name} you are now ${sess?.age}`);
});

app.listen(3000);
