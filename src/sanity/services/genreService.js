import { client, writeClient } from '../client';

export async function fetchAllGenre() {
    const data = await client.fetch(`*[_type == "genres"]{
        genre
    }`);
    return data;
}
export async function updateFavorite(user, genre) {
    const result = await writeClient
    .patch(user).setIfMissing({users: []})
    .append("users", [{favoriteGenres: genre}])
    .commit({autoGenerateArrayKeys: true})
    .then(() => {return "Success"})
    .catch((error) => {return "Error: " + error.message})

    return result
}