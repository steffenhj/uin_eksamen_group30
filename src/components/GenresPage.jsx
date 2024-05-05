import { useEffect, useState } from "react";

import { fetchAllGenre } from "../sanity/services/genreService";
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { fetchAllUsers, fetchAllUsersInfo } from "../sanity/services/userService";

export default function GenresPage(){

const [genres, setGenres] = useState([])
const [userGenres, setUserGenres] = useState([])
const [favoriteGenre, setFavoriteGenre] = useState([])
const [user, setUser] = useState([])

  const getAllGenres = async ()=> {
    const data = await fetchAllGenre()
    const dat = await fetchAllUsersInfo()
    setGenres(data)
    setUserGenres(dat)
}
  
  function getUser() {
    const userData = localStorage.getItem('user');
    const { name } = JSON.parse(userData);
    userGenres?.map((item, index) => 
    {item.name === name ? setUser(name) : null}
    )
  }

  function getUserFavorite(){
    userGenres?.map((item, index) => 
    {if (item.name === user){
      setFavoriteGenre(item.favoriteGenres)
    }
  })}

  function handleTitleClick(genre){
    console.log("Clicked", genre)
  }

useEffect(()=>{
      getAllGenres()
      getUser()
      getUserFavorite()
  },[userGenres])


    return(
      <section>
        <ul className="genreList">
        <h2>Genres</h2>
        {
            genres?.map((item, index) => 
            <li key={index}>
              <p className="genre" onClick={()=>handleTitleClick(item.genre)}>{item.genre}</p>
              {favoriteGenre?.map((fav, ind) => 
                <span key={ind}>
                  {item.genre.includes(fav.genre) ? <IoStar className="star"/> : null}
                </span>
              )}
              <p className="addFav">Add to favorite</p>
            </li>
            
            )
            
        }
    </ul>
    </section>
    )
}
