import { useEffect, useState } from "react";
import { fetchAllMovies } from "../sanity/services/movieService";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTv } from "react-icons/lu";

export default function Header() {
    const [movies, setMovie] = useState({})

    const getAllMovies = async ()=> {
        const data = await fetchAllMovies()
        setMovie(data)
    }

    useEffect(()=>{
        getAllMovies()
    },[])

    console.log("MOVIES", movies)

    return (
        <>
            <Link to={"/Home"}>What to see?</Link>

            <Link to={"/ComparePage"}><LuTv />Hva skal jeg se?</Link>
            
            <Link to={"/GenresPage"}>Bla gjennom sjangere</Link>

            <Link to={"/"}><FaRegUserCircle />Bruker</Link>
        </>
    )

}