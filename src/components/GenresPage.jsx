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

  const fetchFilmData = async () =>{
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/%7Btitle%7D?exact=true&titleType=movie';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7e5ebe5175msh0e1dc510027fc9ap12438ejsn0a8f202a1a18',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
}


  console.log("Genres", genres)
  console.log("USERDATA GENRE", userGenres)

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