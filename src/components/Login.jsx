import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { fetchAllUsers } from "../sanity/services/userService";

export default function Login({users, setUsers, setUserSelected}){


    const [selectedUser, setSelectedUser] = useState(null)

    const handleItemClick = (user) => {
        localStorage.setItem("user", JSON.stringify(user));

        setSelectedUser(user)
        setUserSelected(true) 
    
    }

    console.log("USERS", users)

    return(
        <>
            <h1>Bigpage</h1>
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