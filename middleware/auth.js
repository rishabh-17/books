const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = function (req, res, next) {
  const token = req.header("auth");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

exports.adminAuth = function (req, res, next) {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ msg: "User is not an admin" });
  }
};
