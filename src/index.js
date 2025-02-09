const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect.js");
const router = require("./routes/auth.js");
const userRoutes = require("./routes/userRoutes.js");
dbConnect();
const app = express();

//middleware
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.use("/api/auth", router);
app.use("/api/users", userRoutes);