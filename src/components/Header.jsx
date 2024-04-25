import { useEffect, useState } from "react";

import { fetchAllMovies } from "../sanity/services/movieService";
import { AiFillAccountBook } from "react-icons/ai";

export default function Header(){

    const [movies, setMovie] = useState({})

    const getAllMovies = async ()=> {
        const data = await fetchAllMovies()
        setMovie(data)
    }

    useEffect(()=>{
        getAllMovies()
    },[])

    console.log("MOVIES", movies)

    return(
        <>
        <h1>Header <AiFillAccountBook /> </h1>
        </>
    )
}