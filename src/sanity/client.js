import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: "eovw4zjg",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});

//skn6jOigPlcI0NIOnggVFNFELZRH1vJq1Chfc63K35A8k4WkatNj1dYWIch1VXRjQ8OyMsBUEuLmq1rqIfAARMbTyGcLHDm47BiR1OlAEjjDa31qVmAPmD33h5OQeIJshl6ah4RTFxZ6XSwgUVKeOPpPDKlGwl3vvXNQPmXsxvUEsvjZ5VRe

export const writeClient = createClient({
    projectId: "eovw4zjg",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skDN5Ea2vARlTTxJRIA0FtX7nvAp05N46JppsEIOIym50PLVIclUjLcwYVDfnDu7iyJvWMixkvZdSIWdBEulOtcgPCKOuID904flYPucZvkKeaFEpdvVbL2wf3bohUql9L9Pu4MmW6rLD5V43S1GGr2b02AOYlnwU54Igg5rbLnO9XyUwLGV"
  })
