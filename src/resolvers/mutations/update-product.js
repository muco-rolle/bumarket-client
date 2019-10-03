import gql from "graphql-tag";

export const UPDATE_PRODUCT = gql`
    mutation UPDATE_PRODUCT(
        $id: ID!
        $name: String
        $price: Int
        $description: String
    ) {
        updateProduct(
            id: $id
            product: { name: $name, price: $price, description: $description }
        ) {
            id
        }
    }
`;
