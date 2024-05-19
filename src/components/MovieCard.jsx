import { useEffect, useState } from "react"

export default function MovieCard({movieImdb}){

  const [movieInfo, setMovieInfo] = useState({
    title: '',
    movieId: '',
    imageUrl: '',
    releaseYear: ''

  });

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

      const data = JSON.parse(result);

      setMovieInfo({
        title: data.results?.titleText.text,
        movieId: data.results?.id,
        imageUrl: data.results?.primaryImage?.url || 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        releaseYear: data.results?.releaseYear?.year || 'N/A',
        imageLink: `https://www.imdb.com/title/${movieImdb}`
      })


    } catch (error) {
      console.error(error);
    }
}

  useEffect(() => {
    fetchFilmData();


  } , [])

    //console.log("Movie Info:", movieInfo)
      return (
        <>
       <article className = "movieCard">
          <a href= {movieInfo.imageLink} target="_blank">
        <img src= {movieInfo.imageUrl} alt= {movieInfo.title} />
        </a>
          <a href= {movieInfo.imageLink} target="_blank">
          <h3>{movieInfo.title} ({movieInfo.releaseYear})</h3>
          {console.log("Movie Info:", movieInfo)}
          </a>

        </article>


        </>

      )

}

