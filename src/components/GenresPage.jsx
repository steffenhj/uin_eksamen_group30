import { useEffect, useState,  } from "react";
import { Link } from 'react-router-dom'

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

  function handleAddFavoriteClick(genre){
    console.log("Clicked", genre)
  }

  function handleFavoriteStar(genre){
    let count = 0;
    favoriteGenre?.map((fav, ind) => 
      {if(genre.includes(fav.genre)){
        count++;
      }
    }
    )
    if(count !== 0){
      return <IoStar className="star"/>
    }else{
      return <FaRegStar className="unCheckedStar" />
    }
  }

  function handleFavoriteAdd(genre){
    let count = 0;
    favoriteGenre?.map((fav, ind) => 
      {if(genre.includes(fav.genre)){
        count++;
      }
    }
    )
    if(count === 0){
      return <p className="addFav" onClick={()=>handleAddFavoriteClick(item.genre)}>Add to favorite</p>
    }else{
      return
    }
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
            <li key={index} className="genres">
              <Link to={`/GenrePage/${item.genre}`}>
              <p className="genre" onClick={()=>handleTitleClick(item.genre)}>{item.genre}    
              {handleFavoriteStar(item.genre)}
              </p>
              </Link>

              {handleFavoriteAdd(item.genre)}

            </li>
            )
        }
    </ul>
    </section>
    )
}
