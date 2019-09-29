import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
    mutation ADD_PRODUCT(
        $name: String!
        $description: String!
        $thumbnail: String
        $image: String
        $price: Int!
    ) {
        addProduct(
            product: {
                name: $name
                thumbnail: $thumbnail
                image: $image
                description: $description
                price: $price
            }
        ) {
            id
        }
    }
`;
