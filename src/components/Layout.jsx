import GenresPage from "./GenresPage";
import Header from "./Header";
import Home from "./Home";
import MovieCard from "./MovieCard";
import Login from "./Login";

export default function Layout({children, logedIn, setLogedIn, userName, setUserName}){
    return(
    <>
        <header>
            {logedIn && <Header setLogedIn={setLogedIn} userName={userName} setUserName={setUserName}/>}
        </header>
        <main>
            {children}
        </main>
        <footer>WhatToSee © 2024</footer>
    </>
    )
}