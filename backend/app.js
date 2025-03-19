const express = require("express");
const app = express();
const cors = require("cors");
const bookRoute = require("./routes/bookRoutes");
const paymentRoute = require("./routes/paymentRoutes"); // Import payment routes
const authRoutes = require("./routes/authRoutes");

require("./connection/conn");
app.use(cors());
app.use(express.json());

// app.get("/api/vi", (req, res) => {
//   res.send("hello");
// });

app.use("/api/v1", bookRoute);
app.use("/api/payment", paymentRoute);
app.use("/api/auth", authRoutes); // ✅ Correctly using the auth routes

app.listen(1000, () => {
  console.log("SERVER IS RUNNING");
});
