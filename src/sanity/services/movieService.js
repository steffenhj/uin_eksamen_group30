import { client, writeClient } from '../client';

export async function fetchAllMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        title,
        genres[]->{
            _id,
            name
        }
    }`);
    return data;
}

export async function fetchAllGenre() {
    const data = await client.fetch(`*[_type == "genres"]{
        genre
    }`);
    return data;
}