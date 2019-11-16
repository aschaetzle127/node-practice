"use strict";

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fccTesting = require("./freeCodeCamp/fcctesting.js");

const app = express();

fccTesting(app); //For FCC testing purposes
app.use("/public", express.static(path.join(process.cwd(), "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.route("/").get((req, res) => {
  res.render(path.join(process.cwd(), "/views/pug/index.pug"));
});

app.listen(3000, () => {
  console.log("Listening on port " + 3000);
});
