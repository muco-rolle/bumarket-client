import React from "react";
import Head from "next/head";

import BackOfficeLayout from "../../src/components/back-office/layouts/BackOfficeLayout";

const Products = () => {
    return (
        <div>
            <Head>
                <title>Bumarket - Products</title>
            </Head>
            <h1>Products Page</h1>
        </div>
    );
};

Products.Layout = BackOfficeLayout;
export default Products;
