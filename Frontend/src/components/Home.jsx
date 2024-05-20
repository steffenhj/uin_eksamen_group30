import MovieCard from "./MovieCard"
import { useEffect } from "react"
import { fetchAllUsersInfo } from "../../sanity/services/userService"
import { Link } from "react-router-dom"


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
        <h1>Hei, {userName}</h1>
        <section className="main-content">
            <article>
            <h2>Filmer jeg skal se! {userData.name}</h2>
            {userData[0]?.favoriteMovies.map((movie, index)=>(
            <MovieCard key = {index} movieImdb={movie.imdb} /> 
            ))} 
            </article>

            <article>
            <h2> Din film ønskeliste:</h2> 
            {userData[0]?.wishlist.map((movie, index)=>(
            <MovieCard key = {index} movieImdb={movie.imdb} /> 
            ))}
            </article>
            
            <article className="watchtogether">
                <h2>Jeg skal se sammen med...</h2>
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