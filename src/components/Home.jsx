import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
import { fetchAllUsersInfo } from "../sanity/services/userService"

export default function Home({users}){

    console.log("USER", users)

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

    return(
        <>
        <h2>Hei, {userName}</h2>
        <article>
        <h3>Filmer jeg skal se! {userData.name}</h3>
          {userData[0]?.favoriteMovies.map((movie, index)=>(
         <MovieCard key = {index} movie={movie.title} /> 
         ))}

        </article>


        <article>
          <h3> Din film ønskeliste:</h3>
          {userData[0]?.wishlist.map((movie, index)=>(
         <MovieCard key = {index} movie={movie.title} /> 
         ))}
        </article>
        
        <section>
            <h3>Jeg skal se sammen med...</h3>
            <ul>
                <li>Navn</li>
                <li>Navn</li>
                <li>Navn</li>
            </ul>
        </section>
        </>
    )
}