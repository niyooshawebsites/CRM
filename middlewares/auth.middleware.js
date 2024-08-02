const response = require("../utils/response");

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
    return response(res, 200, true, "Access token found.", null);
  }
};

module.exports = authMiddleware;
