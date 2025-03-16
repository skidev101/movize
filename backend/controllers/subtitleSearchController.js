require('dotenv').config();

const handleSubtitleSearch = async (req, res) => {
  const { imdbId } = req.body;
  if (!imdbId) return res.status(400).send('Empty body');
  
  try{
    const apiKey = process.env.OPEN_SUB_API_KEY;
    const options = {
    method: 'GET',
    headers: {
      'Api-Key': apiKey,
      'Content-Type': 'application/json'
     }
    };
    
    const response = await fetch(`https://api.opensubtitles.org/v1/search/subtitles?query=${imdbId}&languages=en`, options);
    
    const data = await response.json();
    res.json(data);
    console.log(data);
      
  } catch (err){
    console.error(err);
    res.status(500).send("Internal Server Error or No Internet Connection");
  }
}

