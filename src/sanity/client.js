import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: "e7xxxq1s",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});

//skn6jOigPlcI0NIOnggVFNFELZRH1vJq1Chfc63K35A8k4WkatNj1dYWIch1VXRjQ8OyMsBUEuLmq1rqIfAARMbTyGcLHDm47BiR1OlAEjjDa31qVmAPmD33h5OQeIJshl6ah4RTFxZ6XSwgUVKeOPpPDKlGwl3vvXNQPmXsxvUEsvjZ5VRe

export const writeClient = createClient({
    projectId: "e7xxxq1s",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skn6jOigPlcI0NIOnggVFNFELZRH1vJq1Chfc63K35A8k4WkatNj1dYWIch1VXRjQ8OyMsBUEuLmq1rqIfAARMbTyGcLHDm47BiR1OlAEjjDa31qVmAPmD33h5OQeIJshl6ah4RTFxZ6XSwgUVKeOPpPDKlGwl3vvXNQPmXsxvUEsvjZ5VRe"
  })
