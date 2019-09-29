import React from "react";
import BackOfficeLayout from "../../src/components/back-office/layouts/BackOfficeLayout";
import AddProduct from "../../src/components/back-office/products/add-product";
import Head from "next/head";
import styled from "styled-components";
import { color } from "../../src/utils/helpers";

const StyledAddProductPage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const AddProductPage = () => {
    return (
        <StyledAddProductPage>
            <Head>
                <title>Bumarket - Add Product</title>
            </Head>
            <AddProduct />
        </StyledAddProductPage>
    );
};

AddProductPage.Layout = BackOfficeLayout;

export default AddProductPage;
