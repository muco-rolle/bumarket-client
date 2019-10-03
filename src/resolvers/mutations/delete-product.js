import gql from "graphql-tag";

export const DELETE_PRODUCT = gql`
    mutation DELETE_PRODUCT($id: ID!) {
        deleteProduct(id: $id) {
            id
            name
        }
    }
`;
