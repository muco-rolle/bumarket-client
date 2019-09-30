import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { formatMoney, space, color } from "../../../utils/helpers";
import DeleteProduct from "./DeleteProduct";

const StyledProduct = styled.article`
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: ${({ theme }) => theme.shadows.card};
    border-radius: ${space("small3")};
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center;
        border-radius: ${space("small3")} ${space("small3")} 0 0;
    }

    h3 {
        margin: 1rem 1rem 0 1rem;
        text-align: center;
        transform: skew(-5deg) rotate(-1deg);
        margin-top: 0;
        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
        a {
            background: linear-gradient(
                to right,
                ${props => props.theme.colors.primary},
                ${props => props.theme.colors.primaryDark2}
            );
            display: inline;
            line-height: 1.3;
            font-size: 2.7rem;
            text-align: center;
            color: white;
            padding: 0 1.3rem;
            text-decoration: none;
        }
    }

    span {
        display: inline-block;
        position: absolute;
        top: -3px;
        right: -3px;
        padding: 5px;
        transform: rotate(3deg);
        color: white;
        font-weight: 600;
        line-height: 1;
        font-size: 2rem;
        background: linear-gradient(
            to right,
            ${props => props.theme.colors.primary},
            ${props => props.theme.colors.primaryDark2}
        );
    }

    p {
        font-size: 17px;
        line-height: 1.5;
        font-weight: 400;
        flex-grow: 1;
        padding: 1rem 2rem;
        font-size: 2rem;
        color: ${props => props.theme.colors.greyLight1};
    }

    footer {
        display: flex;
        justify-content: space-between;
        border-top: 2px solid ${color("greyLight4")};

        button {
            flex: 1 1 auto;
            cursor: pointer;
            font-size: 1.2rem;
            font-weight: 800;
            outline: none;
            background: white;
            border: 0;
            padding: 1rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            color: ${props => props.theme.colors.grey};

            &:active {
                transform: translateY(2px);
            }

            a {
                color: inherit;
                text-decoration: none;
            }
        }
    }
`;

const Product = ({ id, name, thumbnail, description, price }) => {
    return (
        <StyledProduct>
            {thumbnail && <img src={thumbnail} alt={name} title={name} />}

            <h3>
                <Link href={`/back-office/products/${id}`}>
                    <a>{name}</a>
                </Link>
            </h3>

            <span>{formatMoney(price)} FBU</span>

            <p>{description}</p>

            <footer>
                <DeleteProduct />

                <Link href={`/back-office/products/${id}`}>
                    <button>edit</button>
                </Link>

                <Link href={`/back-office/products/${id}`}>
                    <button>view</button>
                </Link>
            </footer>
        </StyledProduct>
    );
};

export default Product;
