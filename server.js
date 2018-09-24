const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const config = require("./config");

const app = express();

const { port } = config;

// Log requests to the console
if (config.env === "development") {
  app.use(logger("dev"));
}

// Parse incoming requests data
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set up default catch-all route that sends back a welcome message
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to wonderful beginnings"
  })
);

app.listen(port, err => {
  if (err) {
    console.error(err);
  } else {
    console.info(`listening on port ${port}`);
  }
});

module.exports = app;
