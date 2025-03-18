const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/bookRoutes");
const paymentRoute = require("./routes/paymentRoutes"); 

require("./connection/conn");
app.use(cors());
app.use(express.json());

// app.get("/api/vi", (req, res) => {
//   res.send("hello");
// });

app.use("/api/v1", bookRoute);
app.use("/api/payment", paymentRoute); 

app.listen(1000, () => {
  console.log("SERVER IS RUNNING");
});
