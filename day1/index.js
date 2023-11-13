const index = (req, res, next) => {
  console.log("index");
  next();
};

module.exports = index;
