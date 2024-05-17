import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      title
      price
      description
      category
      image
      rating {
        rate
        count
      }
    }
  }
`;
