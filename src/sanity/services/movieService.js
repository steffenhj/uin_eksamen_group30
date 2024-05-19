import { client, writeClient } from '../client';

export async function fetchAllMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        title,
        imdb,
        genres[]->{
            _id,
            genre
        }
    }`);
    return data;
}

export async function fetchGenreMovies(genreName){
    const data = await client.fetch(`*[_type == "movies" && $genreName in genres[]-> genre]{
        title,
        imdb
    }`, {genreName})
    return data
}



