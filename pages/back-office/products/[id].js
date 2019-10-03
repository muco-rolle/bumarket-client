import React from "react";
import BackOfficeLayout from "../../../src/components/back-office/layouts/BackOfficeLayout";
import { useRouter } from "next/dist/client/router";
import SingleProduct from "../../../src/components/back-office/products/SingleProduct";
import styled from "styled-components";

const ProductPage = props => {
    const router = useRouter();

    return <SingleProduct id={router.query.id} {...props} />;
};

ProductPage.Layout = BackOfficeLayout;

const StyledProductPage = styled(ProductPage)``;
export default StyledProductPage;
