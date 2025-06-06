const getMovieDetails = async (req, res) => {
  const { movieId } = req.body;
  if (!movieId) return res.status(400).json({ message: 'Movie ID is required' });
  
  try{
    const token = process.env.TMDB_ACCESS_TOKEN;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
       }
    };
    
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    const data = await response.json();
    res.json(data);
    console.log(data)
    
  } catch (err) {
    console.error(err);
    res.sendStatus(500)
  }
}


module.exports = { getMovieDetails }