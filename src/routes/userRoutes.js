const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const router = express.Router();

//only admin can access the routes
router.get("/admin",verifyToken, (req, res) => {
  res.send("Welcome Admin");
});
//Both admin and manager can access the routes
router.get("/manager",verifyToken, (req, res) => {
  res.send("Welcome Manager");
});
//all users can access the routes
router.get("/user",verifyToken, (req, res) => {
  res.send("Welcome User");
});

module.exports = router;
