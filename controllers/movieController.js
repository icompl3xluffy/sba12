import axios from 'axios'


export const searchmovies = async(req, res)=>{
    const title=req.query.title
    if (!title){
        res.status(400).json({error: "Title query parameter is required"})

        return
    }

    try{
        response= await axios.get(http://www.omdbapi.com/?i=tt3896198&apikey=OMDB_API_KEY)

    } catch (error)

}