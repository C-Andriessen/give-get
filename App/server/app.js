
const express = require("express");

const app = express();

app.listen(5000, () => console.log("Server started"));

app.use(require("morgan")("tiny"));
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers/testRouter"));