const response = (res, statusCode, success, msg, obj) => {
  return res.status(statusCode).json({
    success,
    msg,
    newUser: {
      username: obj?.username || null,
      email: obj?.email || null,
    },
  });
};

module.exports = response;
