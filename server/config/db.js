const mongoose = require("mongoose");

const mongoDB_Url = "mongodb://127.0.0.1:27017/IMS";
console.log(process.env.mongoDB_Url);
// mongoose.connect(mongoDB_Url);
mongoose
  .connect(mongoDB_Url)
  .then(() => console.log("connected"))
  .catch((error) => console.log(error));