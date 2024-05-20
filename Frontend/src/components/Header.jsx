import { useEffect, useState } from "react";
import { fetchAllMovies } from "../../sanity/services/movieService";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTv } from "react-icons/lu";

export default function Header({setLogedIn, userName, setUserName}) {

    const [movies, setMovie] = useState({})

    const getAllMovies = async ()=> {
        const data = await fetchAllMovies()
        setMovie(data)
    }

    const handleUserClick = () => {
        setLogedIn(false)
        localStorage.setItem("logedIn", false)
    }

    useEffect(()=>{
        getAllMovies()

        const user = JSON.parse(localStorage.getItem("user"));
        setUserName(user.name)

    },[])

    return (
        <>
        <nav>
            <Link id="logo" to={"/Home"}>What to see?</Link>

            <ul>
                <li><Link id="home" to={"/Home"}><LuTv /> Hva skal jeg se?</Link></li>
            
                <li><Link id="genres" to={"/GenresPage"}>Bla gjennom sjangere</Link></li>

                <li><Link to={"/"} onClick={handleUserClick}><FaRegUserCircle /> {userName}</Link></li>
            </ul>
        </nav>
        </>
    )
}
