import { useEffect, useState } from "react";

import { fetchAllGenre, fetchAllMovies } from "../sanity/services/movieService";
import { AiFillAccountBook } from "react-icons/ai";

export default function Header(){

    const [movies, setMovie] = useState({})
    const [genres, setGenres] = useState({})

    const getAllMovies = async ()=> {
        const data = await fetchAllMovies()
        setMovie(data)
    }

    const getAllGenres = async ()=> {
        const data = await fetchAllGenre()
        setGenres(data)
    }

    useEffect(()=>{
        getAllMovies()
        getAllGenres()
    },[])

    console.log("MOVIES", movies)
    console.log("Genres", genres)

    return(
        <>
        <h1>Header <AiFillAccountBook /> </h1>
        </>
    )
}