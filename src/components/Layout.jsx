import GenresPage from "./GenresPage";
import Header from "./Header";
import MovieCard from "./MovieCard";
import Login from "./Login";

export default function Layout({children}){
    return(
    <>
        <Header/>
        <GenresPage />
        {children}
    </>
    )
}