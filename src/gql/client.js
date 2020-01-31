import gql from "graphql-tag";

/* eslint-disable */
export const CLIENT_LIST_QUERY = gql`
  query {
    teachers {
      id
      profile {
        name
        email
      }
      clients {
        profile {
          name
          password
        }
      }
    }
  }
`;
