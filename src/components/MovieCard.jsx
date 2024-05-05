import { useEffect, useState } from "react"

export default function MovieCard({movie}){ 
  const fetchFilmData = async () =>{
    const url = `https://moviesdatabase.p.rapidapi.com/titles/${movie}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7e5ebe5175msh0e1dc510027fc9ap12438ejsn0a8f202a1a18',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);

    } catch (error) {
      console.error(error);
    }
}
fetchFilmData()
    
    const [movieInfo, setMovieInfo] = useState({
      title: '',
      movieId: '',
      imageUrl: '',
      releaseYear: ''
    


    })

    useEffect(() => {
      
      if(movie) {
        setMovieInfo({
           title: results.titleText.text,
           movieId: results.id,
           releaseYear: results.releaseYear.year,
          imageUrl: reuslts.primaryImage.url

         
        })
      }
    }, [movie])

    console.log("Movie Info:", movieInfo)
    console.log (movie)
    console.log("Hallo" , movieInfo.results )
      return (
        <>
       <article className = "movieCard">
        <img src= {movieInfo.imageUrl} alt= {movieInfo.title} />

         <h3>{movieInfo.title}</h3> 
         <p>{movieInfo.movieId}</p>  {/*Viser bare filmens ID */}
         <p>{movieInfo.releaseYear}</p>
        
        </article>
        
        
        </>
        
      )
    
}
    
    