import Header from "./Header";

export default function Layout({children, logedIn, setLogedIn, userName, setUserName}){
    return(
    <>
        <header>
            {logedIn && <Header setLogedIn={setLogedIn} userName={userName} setUserName={setUserName}/>}
        </header>
        <main>
            {children}
        </main>
        {logedIn && <footer>WhatToSee © 2024</footer>}
    </>
    )
}