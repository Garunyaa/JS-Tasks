const mongoose = require("mongoose");
const express = require("express");

const app = express();
const userRouter = require("./routes/routes");

mongoose
  .connect("mongodb://127.0.0.1:27017/userdetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log("Connection error", error);
  });

app.use(express.json());
app.use("/", userRouter);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
