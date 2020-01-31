import gql from "graphql-tag";

/* eslint-disable */
export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation SigninMutation($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      username
      email
    }
  }
`;
