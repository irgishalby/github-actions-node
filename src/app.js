const express = require('express');
const app = express();

app.get("/testNode", (_req, res) => {
  res.status(200).send("Yes the testNode endpoint worked")
})

app.get("/hello", (_req, res) => {
  res.status(200).send("Hello from Dockerized App!");
});

module.exports = app;
