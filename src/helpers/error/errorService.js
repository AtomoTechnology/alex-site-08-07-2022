const CatchGlobalError = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    status: false,
    message: err.message,
    err,
  });
};

module.exports = CatchGlobalError;
