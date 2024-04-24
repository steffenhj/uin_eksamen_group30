import { SanityClient } from "@sanity/client";


const options = {
    projectId: "e7xxxq1s",
    dataset: "production"
}

const client = SanityClient({
    ...options,
    apiVersion: '2021-08-31',
    useCdn: true
});

export default client;