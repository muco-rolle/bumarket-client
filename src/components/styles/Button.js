import styled, { css } from "styled-components";
import { color, space, font } from "../../utils/helpers";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${space("small")} ${space("large2")};
    border-width: 2px;
    border: none;
    border-radius: 3px;
    transition: all 0.1s ease;
    margin-left: 3rem;
    /* border-radius: 50px; */
    font-size: ${font("sizeMedium")};
    font-family: inherit;
    font-weight: 800;

    cursor: pointer;
    /* background-color: ${({ theme }) => theme.colors.secondaryDark}; */
    /* color: ${({ theme }) => theme.colors.white}; */
    outline: none;


    :hover {
        outline: none;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    }

    :active {
        box-shadow: none;        
    }

    ${props =>
        props.size === "large" &&
        css`
            padding: ${space("base")} ${space("large4")};
            font-size: ${font("sizeLarge")};
        `}
    
    ${props =>
        props.color &&
        css`
            background-color: ${color(props.color)};
            color: ${color("white")};
        `}
`;
