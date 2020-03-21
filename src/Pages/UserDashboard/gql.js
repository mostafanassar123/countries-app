import gql from "graphql-tag";

export const GET_COUNTRIES = gql`
 {
    countries {
      name
      code
      emoji
    }
  }`