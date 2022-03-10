
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.listen(5000, () => console.log("Server started"));

mongoose.connect(process.env.MONGODB_CONNECT, (err) => {
    if (err) return console.log(err);
    console.log("Connected to the db");
  });

app.use(require("morgan")("tiny"));
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routers/userRouter"));