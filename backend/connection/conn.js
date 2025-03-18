const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://<userid>:<password>@cluster0.xrtd4.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongo DB Connected"));
