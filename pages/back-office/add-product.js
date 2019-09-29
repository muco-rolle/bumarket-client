import React from "react";
import BackOfficeLayout from "../../src/components/back-office/layouts/BackOfficeLayout";
import AddProduct from "../../src/components/back-office/products/add-product";

const AddProductPage = () => {
    return (
        <div>
            <AddProduct />
        </div>
    );
};

AddProductPage.Layout = BackOfficeLayout;

export default AddProductPage;
