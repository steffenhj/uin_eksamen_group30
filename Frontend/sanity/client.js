import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: "xuamulif",
    dataset: "production",
    apiVersion: "2022-03-07",
    useCdn: true
});

//skn6jOigPlcI0NIOnggVFNFELZRH1vJq1Chfc63K35A8k4WkatNj1dYWIch1VXRjQ8OyMsBUEuLmq1rqIfAARMbTyGcLHDm47BiR1OlAEjjDa31qVmAPmD33h5OQeIJshl6ah4RTFxZ6XSwgUVKeOPpPDKlGwl3vvXNQPmXsxvUEsvjZ5VRe

export const writeClient = createClient({
    projectId: "xuamulif",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-03-07",
    token: "skfC3GrTcSG3Jz1tSED8tL1hy7PvoMllGZ7TJUEBRsMoGWaXUSaCGaixS5PFdQsrLNMj8TUR6fMHNlgli6UwmYmDAe1ujfTXS8kCiZBD6A81EGdwTYnK6CI0nngJ0t263IFbFAHC8kfkjxO1KS2ga2nVqchkKfE7BuGVGgOWbmJhjXMqkLS5"
  })
