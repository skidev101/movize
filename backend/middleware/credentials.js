const whitelist = require('../config/whitelist');

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (whitelist.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
}

module.exports = credentials;
