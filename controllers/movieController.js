import axios from 'axios'


export const searchmovies = async(req, res)=>{
    const title=req.query.title
    if (!title){
        res.status(400).json({error: "Title query parameter is required"})

        return
    }

    try{
        response= await axios.get(http://www.omdbapi.com/){
            params{
                s: title,
                apikey: PerformanceObserverEntryList.env.OMDB_API_KEY
            }

    } catch (error)

}