import Header from "./Header";
import MovieCard from "./MovieCard";

export default function Layout({children}){
    return(
    <>
        <Header/>
        {children}
    </>
    )
}