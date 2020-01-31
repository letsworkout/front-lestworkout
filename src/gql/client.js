import gql from "graphql-tag";

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
          email
          password
        }
      }
    }
  }
`;
