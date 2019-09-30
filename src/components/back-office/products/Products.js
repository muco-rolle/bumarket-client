import React from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";

import Product from "./Product";
import { GET_PRODUCTS } from "../../../resolvers/queries/get-products";

const StyledProducts = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    width: 1050px;
    max-width: 90%;
    /* max-width: ${props => props.theme.wrapperWidth}; */
    margin: 10rem auto 10rem auto;
`;

const Products = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    return (
        <StyledProducts>
            {data.products.map(product => {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        thumbnail={product.thumbnail}
                        description={product.description}
                        price={product.price}
                    />
                );
            })}
        </StyledProducts>
    );
};

export default Products;
