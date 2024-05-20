import { client, writeClient } from '../client';

export async function fetchAllGenre() {
    const data = await client.fetch(`*[_type == "genres"]{
        genre,
        _id,
        _type
    }`);
    return data;
}
export async function updateFavorite(userId, genreId) {
    const result = await writeClient
    .patch(userId).setIfMissing({favoriteGenres: []})
    .append("favoriteGenres", [{_type: "reference", _ref: genreId}])
    .commit({autoGenerateArrayKeys: true})
    .then(() => {return "Success"})
    .catch((error) => {return "Error: " + error.message})

    return result
}