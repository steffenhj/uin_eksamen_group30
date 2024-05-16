import { useEffect, useState } from "react";

import { fetchAllGenre, updateFavorite } from "../sanity/services/genreService";
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
    {item.name === name ? setUser(item) : null}
    )
  }

  function getUserFavorite(){
    userGenres?.map((item, index) => 
    {if (item.name === user.name){
      setFavoriteGenre(item.favoriteGenres)
    }
  })}

  function handleTitleClick(genre){
    console.log("Clicked", genre)
  }

  //fix this writeclient
  const handleAddFavoriteClick = async(e, genre, user) => {
    const l = await updateFavorite(user, genre)
  }

  function handleAddFavoriteClicke(genre, user){
    console.log("Clicked", genre, user)
    updateFavorite(user, genre)
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
      return <p className="addFav" onClick={(e)=>handleAddFavoriteClick(genre, user)}>Add to favorite</p>
    }else{
      return <p className="alreadyFav">Favorite-Genre</p>
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
              <p className="genre" onClick={()=>handleTitleClick(item.genre)}>{item.genre}
              {handleFavoriteStar(item.genre)}
              </p>

              {handleFavoriteAdd(item.genre)}

            </li>
            )
        }
    </ul>
    </section>
    )
}
