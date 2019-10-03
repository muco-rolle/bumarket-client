import React from "react";
import styled from "styled-components";
import Head from "next/head";
import { useQuery } from "react-apollo";

import { GET_PRODUCT } from "../../../resolvers/queries/get-product";

const SingleProduct = props => {
    const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { id: props.id }
    });

    if (loading) return <p>loading....</p>;
    if (error) return <p>Error: ${error.message}</p>;

    return (
        <section {...props}>
            <Head>
                <title>Bumarket - {data.product.name}</title>
            </Head>

            <img src={data.product.image} alt={data.product.name} />

            <div className="details">
                <h2>Viewing {data.product.name}</h2>
                <p>{data.product.description}</p>
            </div>
        </section>
    );
};

const StyledSingleProduct = styled(SingleProduct)`
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    min-height: 800px;
    width: 1000px;
    margin: 10rem auto;
    position: relative;

    img {
        display: inline-block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: top;
        vertical-align: text-top;
    }

    .details {
        margin: 0 3rem;
    }
`;

export default StyledSingleProduct;
