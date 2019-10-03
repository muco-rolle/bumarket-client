import gql from "graphql-tag";

export const GET_PRODUCT = gql`
    query GET_PRODUCT($id: ID!) {
        product(id: $id) {
            name
            image
            description
            price
        }
    }
`;
