const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access Denied as no token provided" });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("The decoded user is", decode);
      next();
    } catch (error) {
      res.status(400).json({ message: "Invalid Token" });
    }
  }
  else{
    res.status(401).json({message: "Access Denied as no token provided"});
  }
};

module.exports = verifyToken;
