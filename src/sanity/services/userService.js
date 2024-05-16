import { client, writeClient } from '../client';

export async function fetchAllUsers() {
    const data = await client.fetch(`*[_type == "users"] {
         name,
         "slug": userslug.current 
        }`);
    return data;
}

export async function fetchAllUsersInfo(userName) {
    const query = userName ? `*[_type == "users" && name == "${userName}"]` : `*[_type == "users"]`
    const params = userName ? { userName } : {}

    const data = await client.fetch(`${query} { 
        name ,
        _id ,
        "slug": userslug.current,
        favoriteMovies[]->{
            _id,
            title,
            imdb
        },
        favoriteGenres[]->{
            _id,
            genre,
            _type,
            _ref
        },
        wishlist[]->{
            _id,
            title,
            imdb
        }
    }`, params);
    return data;
}

export async function fetchUserBySlug(slug) {
    const data = await client.fetch(`*[_type == "users" && userslug.current == "${slug}"] { 
        name ,
        _id ,
        favoriteMovies[]->{
            _id,
            title,
            imdb
        },
        favoriteGenres[]->{
            _id,
            genre
        },
        wishlist[]->{
            _id,
            title,
            imdb
        }
    }`);
    return data;
}