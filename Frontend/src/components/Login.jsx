import { Link } from 'react-router-dom'

export default function Login({users, setLogedIn}){
    const handleItemClick = (user) => {
        localStorage.setItem("user", JSON.stringify(user));

        setLogedIn(true) 
        localStorage.setItem("logedIn", true);
    
    }

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