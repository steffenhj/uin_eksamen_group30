export const users = {
    title: 'Users',
    name: 'users',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        },
        {
            title: "Favorite Movies",
            name: "favoriteMovies",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "movies" }],
                },
            ],
        },
        {
            title: "Favorite Genres",
            name: "favoriteGenres",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "genres" }],
                },
            ],
        },
        {
            title: "Wishlist",
            name: "wishlist",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{ type: "movies" }],
                },
            ],
        }
    ],
}