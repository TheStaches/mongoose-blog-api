const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect("mongodb://TheStaches:Holygra1l@ds137812.mlab.com:37812/mongoose-blog-api", {useNewUrlParser: true});
mongoose.Promise = Promise;

let app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("Test");
})
app.use("/api/users", require("./routes/users"));
app.use("/api/blogs", require("./routes/blogs"));
  
module.exports = app;
