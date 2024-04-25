import { SanityClient } from "@sanity/client";


const options = {
    projectId: "e7xxxq1s",
    dataset: "production"
}

const client = SanityClient({
    ...options,
    apiVersion: "2021-08-31",
    useCdn: true
});

export default client;

//skn6jOigPlcI0NIOnggVFNFELZRH1vJq1Chfc63K35A8k4WkatNj1dYWIch1VXRjQ8OyMsBUEuLmq1rqIfAARMbTyGcLHDm47BiR1OlAEjjDa31qVmAPmD33h5OQeIJshl6ah4RTFxZ6XSwgUVKeOPpPDKlGwl3vvXNQPmXsxvUEsvjZ5VRe