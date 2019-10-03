import React from "react";
import { useQuery } from "react-apollo";
import styled from "styled-components";

import Product from "./Product";
import { GET_PRODUCTS } from "../../../resolvers/queries/get-products";

const Products = props => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error ${error.message}</p>;

    return (
        <section {...props}>
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
        </section>
    );
};

const StyledProducts = styled(Products)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 60px;
    width: 1000px;
    max-width: 90%;
    margin: 10rem auto 10rem auto;
`;
export default StyledProducts;
