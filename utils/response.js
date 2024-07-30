const response = (res, statusCode, success, msg, obj) => {
  return res.status(statusCode).json({
    success,
    msg,
    user: obj,
  });
};

module.exports = response;
