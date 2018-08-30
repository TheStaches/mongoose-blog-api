const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
mongoose.Promise = Promise;

let app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Connected to server");
})
app.use("/api/users", require("./routes/users"));
app.use("/api/blogs", require("./routes/blogs"));
  
module.exports = app;
