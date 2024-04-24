const mongoose = require("mongoose");

const connection = mongoose
  .createConnection("mongodb+srv://mayarmenessy:Skill-Swapping@cluster0.1ixo1rw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .on("open", () => {
    console.log("MongoDb Connected");
  })
  .on("error", () => {
    console.log("MongoDb connection error");
  });

module.exports = connection;
