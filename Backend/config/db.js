const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb://localhost:27017/newtodo")
  .on("open", () => {
    console.log("MongoDb Connected");
  })
  .on("error", () => {
    console.log("MongoDb connection error");
  });

module.exports = connection;
