const cors = require('cors');
const corsOptions = require('../config/corsOptions');
const { handlePopSearch } = require('../controllers/popularSearchController')

module.exports = (req, res) => {
  cors(corsOptions)(req, res, async () => {
    if (req.method === 'GET') {
      try {
        await handlePopSearch(req, res);
      } catch (err) {
        res.sendStatus(500);
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  });
};