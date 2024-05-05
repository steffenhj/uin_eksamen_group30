import { useEffect, useState } from "react"

export default function MovieCard({movie}){ 
    
    const [movieInfo, setMovieInfo] = useState({
      title: '',
      movieId: '',
      genres: [],
      imageUrl: ''



    })

    useEffect(() => {
      
      if(movie) {
        setMovieInfo({
          title: movie.title,
          genres: movie.genres.map(genre => genre.name),
          movieId: movie._id,
          imageUrl: movie.PrimaryImage.url 

        })
      }
    }, [movie])

    console.log("Movie Info:", movieInfo)
      return (
        <>
       <article className = "movieCard">
        <img src= {movieInfo.imageUrl} alt= {movieInfo.title} />

        <h3>{movieInfo.title}</h3>
        <p>{movieInfo.movieId}</p> {/*Viser bare filmens ID */}
        <p>Genres: {movieInfo.genres.join(', ')}</p>
        </article>
        
        
        </>
        
      )
    
}
    
    