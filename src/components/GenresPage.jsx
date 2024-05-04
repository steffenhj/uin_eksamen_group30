import { useEffect, useState } from "react";

import { fetchAllGenre } from "../sanity/services/genreService";
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

export default function GenresPage(){

const [genres, setGenres] = useState([])


  const getAllGenres = async ()=> {
    const data = await fetchAllGenre()
    setGenres(data)
}

useEffect(()=>{
    getAllGenres()
  },[])


  console.log("Genres", genres)

    return(
        <ul>
        <h2>Genres</h2>
        {
            genres?.map((item, index) => 
            <p key={index}>{item.genre}
            <span >{item.genre === "Musical" ? <IoStar /> : <FaRegStar />} <button>Add to favorites</button> </span>
            </p>
            )
        }
    </ul>
    )
}