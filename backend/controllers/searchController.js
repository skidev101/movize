const handleSearch = async(req, res) => {
  const { searchQuery, page } = req.body;
  if (!searchQuery) return res.status(400).json({ message: 'Empty body' });
  console.log(searchQuery);
  
  try{
    const token = process.env.TMDB_ACCESS_TOKEN;
    const options = {
	    method: 'GET',
	    headers: {
	      accept: 'application/json',
	      Authorization: `Bearer ${token}`
	    }
    };
    
    const response = await
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=true&language=en-US&page=${page}`,
    options);
    
    const data = await response.json();
    res.json(data);
    console.log(data);
      
  } catch (err){
    console.error(err);
    res.status(500).send("Internal Server Error or No Internet Connection");
  }
}


module.exports = { handleSearch }