import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
import { fetchAllUsersInfo } from "../sanity/services/userService"
import { Link } from "react-router-dom"
import '../styles/css/main.css'

export default function Home({users, handleClick}){

    console.log("USERS IN HOME", users)

    const [userName, setUserName] = useState('')
    const [userData, setUserData] = useState ({})

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        setUserName(user.name)

        const fetchUserData = async ()=> {
            try {
                const userData = await fetchAllUsersInfo(user.name)
                setUserData(userData)
                console.log("USER DATA FOR SINGLE USER", userData)
            } catch (error) {
                console.log("ERROR getting user data: ", error)
            }
        }

        fetchUserData();
    }, []);

    console.log("USERS FROM APP.JSX", users)
    console.log (" hei jeg funker" ,userData)

    const otherUsers = users && users.length > 0 ? users.filter(user => user.name !== userName) : []

    return(
        <>
        <h2>Hei, {userName}</h2>
        <section className="main-content">
            <article>
            <h3>Filmer jeg skal se! {userData.name}</h3>
            {userData[0]?.favoriteMovies.map((movie, index)=>(
            <MovieCard key = {index} movieImdb={movie.imdb} /> 
            ))} 
            </article>

            <article>
            <h3> Din film ønskeliste:</h3> 
            {userData[0]?.wishlist.map((movie, index)=>(
            <MovieCard key = {index} movieImdb={movie.imdb} /> 
            ))}
            </article>
            
            <article>
                <h3>Jeg skal se sammen med...</h3>
                {otherUsers.map((user, index)=>(
                    <Link to="/ComparePage" key={index}>
                        <button  onClick={()=>handleClick(user)}>
                            {user.name} 
                        </button>
                    </Link>
                ))}
            </article>
        </section>
        </>
    )
}