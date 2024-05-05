import { client, writeClient } from '../client';

export async function fetchAllMovies() {
    const data = await client.fetch(`*[_type == "movies"]{
        _id,
        title,
        imdb,
        genres[]->{
            _id,
            name
        }
    }`);
    return data;
}
