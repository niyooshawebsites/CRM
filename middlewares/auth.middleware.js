const response = require("../utils/response");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  //   if token not found
  if (!token) {
    return response(
      res,
      401,
      false,
      "Access token denied. No token found",
      null
    );
  }

  //   if token found
  if (token) {
    try {
      const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded_token;
      response(res, 200, true, "Access token found.", user);
      next();
    } catch (err) {
      console.log(err);
      return response(res, 401, false, "Invalid token", null);
    }
  }
};

module.exports = authMiddleware;
