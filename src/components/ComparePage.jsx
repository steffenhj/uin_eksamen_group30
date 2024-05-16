import React, { useEffect, useState } from 'react';
import { fetchAllUsersInfo, fetchUserBySlug } from "../sanity/services/userService"
import MovieCard from "./MovieCard"
import { Link, useParams } from 'react-router-dom';

export default function ComparePage() {

    const [userName, setUserName] = useState('')
    const [userToCompare, setUserToCompare] = useState('')
    const [userData, setUserData] = useState ({})
    const [userToCompareData, setUserToCompareData] = useState ({})

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        setUserName(user.name)

        const userToCompare = JSON.parse(localStorage.getItem("userToCompare"));
        setUserToCompare(userToCompare.name)

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

    const {slug} = useParams();

    const getUserBySlug = async (slug) => {
        const data = await fetchUserBySlug(slug)
        setUserToCompareData(data)
    }

    useEffect(()=>{
        getUserBySlug(slug)
    }, [slug])

    // Må endre slik at en bruker ikke kan gå til innloggingssiden uten å logge ut, for nå er det mulig å compare stig mot stig.

    const commonFavorites = userData[0]?.favoriteMovies.filter(movie1 => userToCompareData[0]?.favoriteMovies.some(movie2 => movie1.imdb === movie2.imdb)) || []

    const commonWishList = userData[0]?.wishlist.filter(movie1 => userToCompareData[0]?.wishlist.some(movie2 => movie1.imdb === movie2.imdb)) || []

    const commonGenres = userData[0]?.favoriteGenres.filter(genre1 => userToCompareData[0]?.favoriteGenres.some(genre2 => genre1.genre === genre2.genre)) || []

    return (
        <section>
            <h1>Compare Page</h1>
            <h2>FORSLAG FOR {userName.toUpperCase()} OG {userToCompare.toUpperCase()}</h2>

            <article>
                <h3>Catch Up!</h3>
                <p>Dere har {commonWishList.length} filmer felles i ønskelistene deres.</p>
                {commonWishList.map((movie, index)=>(
                <MovieCard key = {index} movieImdb={movie.imdb} /> 
                ))} 
            </article>

            <article>
                <h3>Go safe!</h3>
                <p>Dere har {commonFavorites.length} filmer felles i favorittlisten deres.</p>
                {commonFavorites.map((movie, index)=>(
                <MovieCard key = {index} movieImdb={movie.imdb} /> 
                ))} 
            </article>

            <article>
                <h3>Utforsk!</h3>
                <p>Dere liker begge disse sjangerne, se hvilke filmer dere kan velge mellom: </p>
                {commonGenres.map((genre, index)=>(

                <Link to="/GenresPage" key={index}>
                    <p key={index}>{genre.genre}</p>
                </Link>

                ))}
            </article>
        </section>
    )
}