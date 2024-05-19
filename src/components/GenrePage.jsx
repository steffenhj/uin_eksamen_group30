import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import { fetchGenreMovies } from "../sanity/services/movieService";

export default function GenrePage() {

  const[genreMovies, setGenreMovies] =useState([])

  const {slug} = useParams()
   
  const getGenreMovies = async (slug) => {
  
    const data = await fetchGenreMovies(slug) 
    
    setGenreMovies(data)
  }


  useEffect(()=> {
    getGenreMovies(slug)
  }, [slug, genreMovies])



  return (
    <>
    <section className="genrepage">
      <h2>Sjanger: {slug?.charAt(0).toUpperCase() + slug?.slice(1)} ({genreMovies?.length} filmer)</h2> {/*  koden henter ut og oppdaterer indexen i antall filmer som finnes i hver av de ulike sjangerene*
      kilde brukt: https://www.w3schools.com/jsref/jsref_charat.asp*/}
      
      <ul>
      {genreMovies.map((item, index) => <li key={"item" + index} > <MovieCard movieImdb={item.imdb} /></li> )}
      </ul>
      
      
      
      </section>
      </>
      
  );
}


 
