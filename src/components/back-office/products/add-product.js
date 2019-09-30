import React, { useState } from "react";
import { useMutation } from "react-apollo";

import InputField from "../../shared/input-field/InputField";
import TextAreaField from "../../shared/textarea-field/TextAreaField";
import { ADD_PRODUCT } from "../../../resolvers/mutations/add-product";
import Form from "../../shared/form/form";
import { Button } from "../../styles/Button";
import { useRouter } from "next/dist/client/router";

const AddProduct = () => {
    const [product, setProduct] = useState({
        name: "",
        thumbnail: "",
        image: "",
        price: 0,
        description: ""
    });

    const router = useRouter();

    const [addProduct, { data }] = useMutation(ADD_PRODUCT);

    const onChangeHandler = event => {
        const { name, type, value } = event.target;

        const newValue = type === "number" ? +value : value;
        setProduct(product => ({ ...product, [name]: newValue }));
    };

    const uploadFile = async event => {
        const files = event.target.files;
        const data = new FormData();

        data.append("file", files[0]);
        data.append("upload_preset", "bumarket");

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/bumarket/image/upload`,
            {
                method: "POST",
                body: data
            }
        );

        const savedFile = await response.json();
        setProduct(product => ({
            ...product,
            thumbnail: savedFile.secure_url,
            image: savedFile.eager[0].secure_url
        }));
    };

    const onSubmitHandler = async event => {
        event.preventDefault();
        const response = await addProduct({ variables: product });

        const id = response.data.addProduct.id;
        router.push(`/back-office/products/${id}`);
    };

    return (
        <Form onSubmitHandler={onSubmitHandler} title="Add Product">
            <InputField
                type="file"
                placeholder="image"
                id="image"
                name="image"
                onChangeHandler={uploadFile}
            />
            <br />

            <InputField
                type="text"
                placeholder="name"
                name="name"
                id="name"
                value={product.name}
                onChangeHandler={onChangeHandler}
            />
            <br />

            <InputField
                type="number"
                placeholder="price"
                name="price"
                id="price"
                value={product.price}
                onChangeHandler={onChangeHandler}
            />
            <br />

            <TextAreaField
                placeholder="description"
                name="description"
                id="description"
                name="description"
                value={product.description}
                onChangeHandler={onChangeHandler}
            ></TextAreaField>
            <br />

            <Button color="primary" type="submit">
                save product
            </Button>
        </Form>
    );
};

export default AddProduct;
