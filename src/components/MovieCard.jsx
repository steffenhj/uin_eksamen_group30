import { useEffect, useState } from "react"

export default function MovieCard({movieImdb}){ 

  const [movieInfo, setMovieInfo] = useState({
    title: '',
    movieId: '',
    imageUrl: '',
    releaseYear: ''
  
  });
  const [results, setResults] = useState("")

  const [data, setData] = useState({});

  const fetchFilmData = async () =>{
    const url = `https://moviesdatabase.p.rapidapi.com/titles/${movieImdb}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '40b1ca00e0msha55318eca33c057p1a29bfjsndd4ccf3da3db',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setResults(result);

      const data = JSON.parse(result);
      setData(data);
      const title = data.results.titleText.text;
      console.log("Title titleText:", title);

      setMovieInfo({
        title: data.results.titleText.text,
        movieId: data.results.id,
        imageUrl: data.results.primaryImage.url,
        releaseYear: data.results.releaseYear.year
      })
      

    } catch (error) {
      console.error(error);
    }
}

  useEffect(() => {
    fetchFilmData();

    // console.log("Data:", data)
    

    
  } , [])
    
    

    

    console.log("Movie Info:", movieInfo)
    console.log (movieImdb)
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
    
    