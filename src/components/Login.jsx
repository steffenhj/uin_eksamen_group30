import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { fetchAllUsers } from "../sanity/services/userService";

export default function Login({users, setUsers}){


    const handleItemClick = (user) => {
        localStorage.setItem("user", JSON.stringify(user));
    }

    console.log("USERS", users)

    return(
        <>
            <h1>Hvem skal se i dag?</h1>
            <h2>Velg en bruker</h2>
                {users.map((user, index) => (
                    <Link to="/Home" key={index}>
                    <button  onClick={()=>handleItemClick(user)}>
                        {user.name} 
                    </button>
                    </Link>
                ))}
        </>
    );
}