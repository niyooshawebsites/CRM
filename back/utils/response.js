const response = (res, statusCode, success, msg, obj) => {
  return res.status(statusCode).json({
    success,
    msg,
    data: obj,
  });
};

module.exports = response;
