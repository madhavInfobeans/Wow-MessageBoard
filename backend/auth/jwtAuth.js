const jwt = require("jsonwebtoken");

auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log("token", token);
    const ver = jwt.verify(token, process.env.JWT_SECRET);
    console.log(ver);
    next();
  } else {
    res.status(401).json({ status: "unauthorized No token" });
  }
};

module.exports = auth;
