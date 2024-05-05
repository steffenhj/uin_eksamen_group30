import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
import { fetchAllUsersInfo } from "../sanity/services/userService"

export default function Home({users}){

    console.log("USER", users)

    const [userName, setUserName] = useState('')

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        setUserName(user.name)

        const fetchUserData = async ()=> {
            try {
                const userData = await fetchAllUsersInfo(user.name)
                console.log("USER DATA FOR SINGLE USER", userData)
            } catch (error) {
                console.log("ERROR getting user data: ", error)
            }
        }

        fetchUserData();
    }, []);

    console.log("USERS FROM APP.JSX", users)

    return(
        <>
        <h2>Hei, {userName}</h2>
        <h3>Filmer jeg skal se!</h3>
        <MovieCard/>
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