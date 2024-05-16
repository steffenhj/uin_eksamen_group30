import GenresPage from "./GenresPage";
import Header from "./Header";
import Home from "./Home";
import MovieCard from "./MovieCard";
import Login from "./Login";

export default function Layout({children, userSelected, setUserSelected}){
    return(
    <>
        {userSelected && <Header setUserSelected={setUserSelected}/>}
        {children}
    </>
    )
}