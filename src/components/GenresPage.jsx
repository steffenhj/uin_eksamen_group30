import { useEffect, useState,  } from "react";
import { Link } from 'react-router-dom'

import { fetchAllGenre, updateFavorite } from "../sanity/services/genreService";
import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { fetchAllUsers, fetchAllUsersInfo } from "../sanity/services/userService";

export default function GenresPage(){

const [genres, setGenres] = useState([])
const [userGenres, setUserGenres] = useState([])
const [favoriteGenre, setFavoriteGenre] = useState([])
const [user, setUser] = useState([])
const [userId, setUserId] = useState(null)

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
    {item.name === name ? (setUser(item), setUserId(item._id)) : null}
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
  const handleAddFavoriteClick = async(e, genre) => {
    e.preventDefault()
    console.log("GenreID:", genre._id,"UserID:", userId)
    console.log(genre)
    const l = await updateFavorite(userId, genre._id)
    console.log(l)
  }

  function handleAddFavoriteClicke(){
    console.log("Clicked", addGenreToSanity, userId)
    updateFavorite(userId, addGenreToSanity)
  }

  function handleFavoriteStar(genre){
    let count = 0;
    favoriteGenre?.map((fav, ind) => 
      {if(genre === fav.genre){
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

  function handleFavoriteAdd(genreArr){
    let count = 0;
    favoriteGenre?.map((fav, ind) => 
      {if(genreArr.genre === fav.genre){
        count++;
        console.log("e", fav.genre, genreArr.genre)
      }
    }
    )
    if(count !== 0){
      return <p className="alreadyFav">Favorited</p>
    }else{
      console.log(count)
      return <p className="addFav" onClick={(e)=>handleAddFavoriteClick(e,genreArr)}>Add to favorite</p>

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

              {handleFavoriteAdd(item)}

            </li>
            )
        }
    </ul>
    </section>
    )
}
