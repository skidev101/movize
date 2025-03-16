const cors = require('cors');
const corsOptions = require('../config/corsOptions');
const { getMovieDetails } = require('../controllers/movieDetailsController')

module.exports = (req, res) => {
  cors(corsOptions)(req, res, async () => {
    if (req.method === 'POST') {
      try {
        await getMovieDetails(req, res);
      } catch (err) {
        res.sendStatus(500);
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  });
};