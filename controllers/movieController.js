import axios from 'axios'


export const searchmovies = async(req, res)=>{
    const title=req.query.title
    if (!title){
        return res.status(400).json({error: "Title query parameter is required"})
    }

    try{
        const response= await axios.get(http://www.omdbapi.com/", 
            {params:{s: title, apikey: PerformanceObserverEntryList.env.OMDB_API_KEY}
    })

    } catch (error) {
        res.Staus(500).json({error: "Failed to fetch movies"})
    }

}