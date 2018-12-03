const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const port = 8081;
const app = express();

app.use(bodyParser.json());

app.get("/status", (req, res) => res.send("Hello World!"));

app.post("/register", (req, res) =>
  res
    .status(400)
    .send(`Receive Email: ${req.body.email} & Password: ${req.body.password}`)
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
