import { client, writeClient } from '../client';

export async function fetchAllGenre() {
    const data = await client.fetch(`*[_type == "genres"]{
        genre
    }`);
    return data;
}