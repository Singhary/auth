const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

//only admin can access the routes
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.send("Welcome Admin");
});
//Both admin and manager can access the routes
router.get(
  "/manager",
  verifyToken,
  authorizeRoles("admin", "manager"),
  (req, res) => {
    res.send("Welcome Manager");
  }
);
//all users can access the routes
router.get(
  "/user",
  verifyToken,
  authorizeRoles("admin", "manager", "user"),
  (req, res) => {
    res.send("Welcome User");
  }
);

module.exports = router;
