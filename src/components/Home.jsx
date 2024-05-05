import MovieCard from "./MovieCard"

export default function Home({users}){

    console.log("USER", users)

    return(
        <>
        <h2>Hei, {users.name}</h2>
        <h3>Filmer jeg skal se!</h3>
        <MovieCard/>
        <section>
            <h3>Jeg skal se sammen med...</h3>
            <ul>
                <li>Navn</li>
                <li>Navn</li>
                <li>Navn</li>
            </ul>
        </section>
        </>
    )
}