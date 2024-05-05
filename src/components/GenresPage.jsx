import { useEffect, useState } from "react";

import { fetchAllGenre } from "../sanity/services/genreService";
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { fetchAllUsers, fetchAllUsersInfo } from "../sanity/services/userService";

export default function GenresPage(){

const [genres, setGenres] = useState([])
const [userGenres, setUserGenres] = useState([])


  const getAllGenres = async ()=> {
    const data = await fetchAllGenre()
    const dat = await fetchAllUsersInfo()
    setGenres(data)
    setUserGenres(dat)
}

useEffect(()=>{
    getAllGenres()
  },[])

  console.log("Genres", genres)
  console.log("USERDATA GENRE", userGenres)

    return(
        <ul>
        <h2>Genres</h2>
        {
            genres?.map((item, index) => 
            <p key={index}>{item.genre}
            <span >
                {item.genre === "Musical" ? <IoStar /> : <FaRegStar />}
                 <button>Add to favorites</button> </span>
            </p>
            )
        }
    </ul>
    )
}