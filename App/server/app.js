const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.listen(5001, () => console.log("Server started"));

mongoose.connect(process.env.MONGODB_CONNECT, (err) => {
  if (err) return console.log(err);
  console.log("Connected to the db");
});

app.use(cors());
app.use(cookieParser());
app.use(require("morgan")("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/user", require("./routers/userRouter"));
app.use("/api/email", require("./routers/emailRouter"));
app.use("/api/post", require("./routers/postRouter"));
app.use("/seeder", require("./routers/seederRouter"));
