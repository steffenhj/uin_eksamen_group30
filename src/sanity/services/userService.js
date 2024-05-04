import { client, writeClient } from '../client';

export async function fetchAllUsers() {
    const data = await client.fetch(`*[_type == "users"] { name }`);
    return data;
}

export async function fetchAllUsersInfo() {
    const data = await client.fetch(`*[_type == "users"] { 
        name ,
        favoriteMovies[]->{
            _id,
            title,
            imdb
        },
        favoriteGenres[]->{
            _id,
            title
        },
        wishlist[]->{
            _id,
            title
        }
    }`);
    return data;
}