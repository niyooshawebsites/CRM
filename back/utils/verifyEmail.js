const response = require("../utils/response");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyEmail = async (req, res) => {
  // get the token from the url
  const token = req.query.token;

  // if toke not found
  if (!token) {
    return response(res, 403, false, "No token found", null);
  }

  // if token found
  if (token) {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // if token is invalid
    if (!decoded) {
      return response(res, 401, false, "Invalid token", null);
    }

    // if toke is valid
    if (decoded) {
      const user = await User.findOne(decoded.email);

      // if user not found
      if (!user) {
        return response(res, 404, false, "No user found", null);
      }

      // if user found the update the user
      if (user) {
        const updateIsVerfied = await User.findOneAndUpdate(
          {
            email: decoded.email,
          },
          {
            $set: {
              isVerified: true,
            },
          },
          {
            new: true,
          },
          {
            runValidators: true,
          }
        );
        return response(res, 200, true, "User verified", updateIsVerfied);
      }
    }
  }
};

module.exports = verifyEmail;
