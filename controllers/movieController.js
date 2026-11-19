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
        res.Staus(500).json({error: "Can Not Find Movies"})
    }

}

export const getMovieDetails =async (req, res) =>{
    const id= req.params.id 

    try{ 
        const response =await axios.get("http://www.omdbapi.com/",
             {params: title, apikey: PerformanceObserverEntryList.env.OMDB_API_KEY}

    })
     res.json(response.data)
   
    
}