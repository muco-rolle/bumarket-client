import React, { useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "react-apollo";

import InputField from "../../shared/input-field/InputField";
import TextAreaField from "../../shared/textarea-field/TextAreaField";
import Form from "../../shared/form/form";

import { Button } from "../../styles/Button";
import { GET_PRODUCT } from "../../../resolvers/queries/get-product";
import { UPDATE_PRODUCT } from "../../../resolvers/mutations/update-product";

const EditProduct = ({ id }) => {
    const [product, setProduct] = useState({});

    const router = useRouter();
    const payload = useQuery(GET_PRODUCT, { variables: { id } });
    const [updateProduct, { data }] = useMutation(UPDATE_PRODUCT);

    if (payload.loading) return <p>Loading...</p>;
    if (payload.error) return <p>Error {payload.error.message}</p>;

    const foundProduct = payload.data.product;

    const onChangeHandler = event => {
        const { name, type, value } = event.target;

        const newValue = type === "number" ? +value : value;
        setProduct(product => ({ ...product, [name]: newValue }));
    };

    const onSubmitHandler = async event => {
        event.preventDefault();
        const response = await updateProduct({ variables: { id, ...product } });

        router.push(`/back-office/products/${id}`);
    };

    return (
        <Form onSubmitHandler={onSubmitHandler} title="Edit Product">
            <InputField
                type="text"
                placeholder="name"
                name="name"
                id="name"
                value={product.name}
                defaultValue={foundProduct.name}
                onChangeHandler={onChangeHandler}
            />

            <InputField
                type="number"
                placeholder="price"
                name="price"
                id="price"
                defaultValue={foundProduct.price}
                onChangeHandler={onChangeHandler}
            />

            <TextAreaField
                placeholder="description"
                name="description"
                id="description"
                name="description"
                value={product.description}
                defaultValue={foundProduct.description}
                onChangeHandler={onChangeHandler}
            ></TextAreaField>

            <Button color="primary" type="submit">
                save changes
            </Button>
        </Form>
    );
};

export default EditProduct;
