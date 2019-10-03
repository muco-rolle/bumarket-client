import React from "react";
import { useMutation } from "react-apollo";
import { DELETE_PRODUCT } from "../../../resolvers/mutations/delete-product";
import { GET_PRODUCTS } from "../../../resolvers/queries/get-products";

const updateCache = (cache, payload) => {
    const cachedData = cache.readQuery({ query: GET_PRODUCTS });

    cachedData.products = cachedData.products.filter(
        product => product.id !== payload.data.deleteProduct.id
    );

    cache.writeQuery({ query: GET_PRODUCTS, cachedData });
};

const DeleteProduct = ({ id }) => {
    const [deleteProduct, { loading, error, data }] = useMutation(
        DELETE_PRODUCT
    );

    const updateCache = (store, payload) => {
        const data = store.readQuery({ query: GET_PRODUCTS });
        const newProducts = data.products.filter(
            product => product.id !== payload.data.deleteProduct.id
        );

        store.writeQuery({
            query: GET_PRODUCTS,
            data: { products: [...newProducts] }
        });
    };

    const onClickHandler = () =>
        deleteProduct({
            variables: { id },
            update: updateCache
        });

    return <button onClick={onClickHandler}>delete</button>;
};

export default DeleteProduct;
