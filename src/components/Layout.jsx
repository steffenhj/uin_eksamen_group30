import GenresPage from "./GenresPage";
import Header from "./Header";
import Home from "./Home";
import MovieCard from "./MovieCard";
import Login from "./Login";

export default function Layout({children}){
    return(
    <>
        <Header/>
        <Home/>
        <GenresPage />
        {children}
    </>
    )
}