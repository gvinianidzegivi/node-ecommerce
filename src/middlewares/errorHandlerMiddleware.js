const errorHandlerMiddleware = (error, req, res, next) => {
  const { code, message } = error;

  return res.status(code).json({ message });
};

module.exports = errorHandlerMiddleware;
