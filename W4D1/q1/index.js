"use strict";

/**
 * Module dependencies.
 */

var express = require("express");
var app = express();
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var path = require("path");

// custom log format
if (process.env.NODE_ENV !== "test") app.use(logger(":method :url"));

// parses request cookies, populating
// req.cookies and req.signedCookies
// when the secret is passed, used
// for signing the cookies.
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// parses x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("cookieForm", { cookie: req.cookies });
});

app.post("/", function (req, res) {
  var minute = 60000;
  let key = req.body.key;
  let value = req.body.value;
  if (key && value) res.cookie(key, value, { maxAge: minute });
  res.redirect("back");
});

app.listen(3000);


