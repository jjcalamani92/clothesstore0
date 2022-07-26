import { GraphQLClient } from "graphql-request";

export const graphQLClientS = new GraphQLClient(
  `${process.env.APIS_URL}/graphql`,
  {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  }
);
export const graphQLClientP = new GraphQLClient(
  `${process.env.APIP_URL}/graphql`,
  {
    credentials: "include",
    mode: "cors",
  }
);
export const graphQLClient = new GraphQLClient(
  `${process.env.APIP_URL}/graphql`,
  {
    headers: {
      authorization: "Bearer MY_TOKEN",
    },
  }
);
