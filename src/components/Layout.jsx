import GenresPage from "./GenresPage";
import Header from "./Header";
import Home from "./Home";
import MovieCard from "./MovieCard";

export default function Layout({children}){
    return(
    <>
        <Header/>
        <Home/>
        {children}
    </>
    )
}