const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://kamalshweta9:&Hwetakamal1997@cluster0.xrtd4.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongo DB Connected"));
