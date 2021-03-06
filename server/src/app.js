const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const Sequelize = require("sequelize");

const port = 8081;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/status", (req, res) => res.send("Hello World!"));

app.post("/register", (req, res) =>
  res
    .status(200)
    .send(`Receive Email: ${req.body.email} & Password: ${req.body.password}`)
);

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "path/to/database.sqlite"
});

sequelize
  .sync()
  .then(() =>
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  )
  .catch(err => console.log("Connection Error", err));
