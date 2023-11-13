const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(url, method);
  next();
};

module.exports = logger;
