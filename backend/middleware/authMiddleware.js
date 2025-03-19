const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ success: false, message: "Access Denied" });

  try {
    const verified = jwt.verify(
      token,
      "20bb63dcaf19391b83a6bdf5cf9607f2fa6030782636d4127cf6df2e8b5d9248"
    );
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid Token" });
  }
};
