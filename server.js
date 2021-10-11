/** @format */

const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const data = require("./studentsData.json");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get(["/"], function (req, res) {
  res.render("index", { data: data });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Thats working on ${PORT}`));
