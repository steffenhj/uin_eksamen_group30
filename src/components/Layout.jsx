import GenresPage from "./GenresPage";
import Header from "./Header";
import Home from "./Home";
import MovieCard from "./MovieCard";
import Login from "./Login";

export default function Layout({children, userSelected, setUserSelected, userName}){
    return(
    <>
        
        {userSelected && <Header setUserSelected={setUserSelected} userName={userName}/>}
        
        <main>
            {children}
        </main>
        <footer>
            <p>WhatToSee © 2024</p>
        </footer>
    </>
    )
}