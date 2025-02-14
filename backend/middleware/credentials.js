const whitelist = require('../config/whitelist');

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.includes(origin)) {
    res.headers('Access-Control-Allow-Credentials', true)
  }
  next();
}

module.export = credentials;
