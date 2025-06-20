const getPopularMovies = async (req, res) => {
  try{
     const api_key = process.env.TMDB_API_KEY;
     const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`);
     const data = await response.json();
     res.json(data);
     console.log(data);
      
  } catch (err){
    console.error(err);
    res.json({ 
    	message: 'an error occured',
    	error: err
    });
  }
}

module.exports = { getPopularMovies }