const notfound = (req, res, next) => {
  const url = req.url;
  console.log(url);
  // return res.send(url);
  if (url !== "/" || url !== "/about") {
    res.send("Route not found");
  }
next();
};

module.exports = notfound;
