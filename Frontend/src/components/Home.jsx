import MovieCard from "./MovieCard"
import { useEffect } from "react"
import { fetchAllUsersInfo } from "../../sanity/services/userService"
import { Link } from "react-router-dom"
import '../styles/css/main.css'

export default function Home({users, userName, userData, setUserData}){
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));

        const fetchUserData = async ()=> {
            try {
                const userData = await fetchAllUsersInfo(user.name)
                setUserData(userData)
            } catch (error) {
                console.log("ERROR getting user data: ", error)
            }
        }

        fetchUserData();
    }, []);

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
                <ul>
                    {otherUsers.map((user, index)=>(
                        <li className="users-link" key={index}>
                            <Link to={"/ComparePage/" + user.slug} key={index}>
                                    {user.name} 
                            </Link>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
        </>
    )
}