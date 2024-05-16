import { client, writeClient } from '../client';

export async function fetchAllGenre() {
    const data = await client.fetch(`*[_type == "genres"]{
        genre,
        _id
    }`);
    return data;
}
export async function updateFavorite(userId, genre) {
    const result = await writeClient
    .patch(userId).setIfMissing({favoriteGenres: []})
    .append("favoriteGenres", [{favoriteGenres: genre}])
    .commit({autoGenerateArrayKeys: true})
    .then(() => {return "Success"})
    .catch((error) => {return "Error: " + error.message})

    return result
}