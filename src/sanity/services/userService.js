import { client, writeClient } from '../client';

export async function fetchAllUsers() {
    const data = await client.fetch(`*[_type == "users"] { name }`);
    return data;
}

