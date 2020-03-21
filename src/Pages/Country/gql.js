import gql from "graphql-tag";

export const FETCH_COUNTRY_BY_CODE = gql`
    query getCountry($code: String!) {
    country(code: $code) {
      name
            native
            emoji
            currency
            phone
    }
  }
`;