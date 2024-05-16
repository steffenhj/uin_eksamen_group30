import { useEffect, useState } from "react";
import { fetchAllMovies } from "../sanity/services/movieService";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTv } from "react-icons/lu";

export default function Header({userName}) {
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
            <Link id="logo" to={"/Home"}>What to see?</Link>

            <div>
                <Link id="home" to={"/Home"}><LuTv /> Hva skal jeg se?</Link>
            
                <Link id="genres" to={"/GenresPage"}>Bla gjennom sjangere</Link>

                <Link to={"/"}><FaRegUserCircle /> {userName}</Link>
            </div>
        </>
    )
}
