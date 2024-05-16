import GenresPage from "./GenresPage";
import Header from "./Header";
import Home from "./Home";
import MovieCard from "./MovieCard";
import Login from "./Login";

export default function Layout({children, userName}){
    return(
    <>
        <nav>
            <Header userName={userName}/>
        </nav>
        <main>
            {children}
        </main>
        <footer>
            <p>footer??</p>
        </footer>
    </>
    )
}