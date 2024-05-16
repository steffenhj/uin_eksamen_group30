import React, { useEffect, useState } from 'react';

export default function ComparePage() {

    const [userName, setUserName] = useState('')
    const [userToCompare, setUserToCompare] = useState('')

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        setUserName(user.name)

        const userToCompare = JSON.parse(localStorage.getItem("userToCompare"));
        setUserToCompare(userToCompare.name)

    }, []);

    // Må endre slik at en bruker ikke kan gå til innloggingssiden uten å logge ut, for nå er det mulig å compare stig mot stig.

    console.log("Logged in USER NAME", userName)
    console.log("USER TO COMPARE", userToCompare)

    return (
        <section>
            <h1>Compare Page</h1>
            <h2>FORSLAG FOR {userName.toUpperCase()} OG {userToCompare.toUpperCase()}</h2>

            <article>
                <h3>Catch up!</h3>
            </article>
            <article>
                <h3>Go safe!</h3>
            </article>
                <h3>Utforsk!</h3>
            <article>

            </article>
        </section>
    )
}