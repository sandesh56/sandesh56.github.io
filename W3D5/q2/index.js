const express = require("express");

const logger = require("morgan");

const app = express();
app.use(logger());

app.use("/", (req, res) => {});

app.listen(3000);
