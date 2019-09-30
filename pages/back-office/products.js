import React from "react";
import Head from "next/head";

import BackOfficeLayout from "../../src/components/back-office/layouts/BackOfficeLayout";
import Products from "../../src/components/back-office/products/Products";

const ProductsPage = () => {
    return (
        <div>
            <Head>
                <title>Bumarket - Products</title>
            </Head>
            <Products />
        </div>
    );
};

ProductsPage.Layout = BackOfficeLayout;
export default ProductsPage;
