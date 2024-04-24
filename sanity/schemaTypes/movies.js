export const movies = {
    title: 'Movies',
    name: 'movies',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Release Date',
            name: 'releaseDate',
            type: 'date',
        },
        {
            title: 'Rating',
            name: 'rating',
            type: 'number',
        },
        {
            title: 'Genres',
            name: 'genres',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'genres' }],
                },
            ],
        },
    ],
}