import React from "react";
import BackOfficeLayout from "../../../src/components/back-office/layouts/BackOfficeLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import EditProduct from "../../../src/components/back-office/products/EditProduct";
import styled from "styled-components";
import { space } from "../../../src/utils/helpers";

const StyledEditProductPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const EditProductPage = () => {
    const router = useRouter();

    return (
        <StyledEditProductPage>
            <Head>
                <title>Bumarket - {router.query.id}</title>
            </Head>
            <EditProduct id={router.query.id} />
        </StyledEditProductPage>
    );
};

EditProductPage.Layout = BackOfficeLayout;

export default EditProductPage;
