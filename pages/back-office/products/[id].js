import React from "react";
import BackOfficeLayout from "../../../src/components/back-office/layouts/BackOfficeLayout";
import { useRouter } from "next/dist/client/router";

const ProductPage = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Product Page {router.query.id}</h1>
        </div>
    );
};

ProductPage.Layout = BackOfficeLayout;

export default ProductPage;
