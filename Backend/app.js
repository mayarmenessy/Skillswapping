const express = require("express");
const body_parser = require("body-parser");
const userRouter = require("./routers/user.routers");

const app = express();

app.use(body_parsar.json());

app.use("/", userRouter);
module.exports = app;
