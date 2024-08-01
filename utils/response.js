const response = (res, statusCode, success, msg, obj) => {
  return res.status(statusCode).json({
    success,
    msg,
    newUser: {
      username: obj?.username,
      email: obj?.email,
    },
  });
};

module.exports = response;
