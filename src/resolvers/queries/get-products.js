import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
    query GET_PRODUCTS {
        products {
            id
            name
            thumbnail
            description
            price
        }
    }
`;
