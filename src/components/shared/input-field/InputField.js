import React from "react";
import styled from "styled-components";
import { color, font, space } from "../../../utils/helpers";

const StyledInput = styled.input`
    padding: ${space("small")} ${space("medium")};
    width: 100%;
    border: 1px solid #e3e3e3;
    border-radius: 3px;
    outline: none;
    font-family: inherit;
    font-size: ${font("sizeMedium")};
    font-weight: 800;
    color: inherit;
    transition: all 0.3s ease;

    &::placeholder {
        color: ${color("greyLight3")};
    }

    :focus {
        border-color: ${color("greyLight2")};
    }
`;

const InputField = props => (
    <StyledInput
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChangeHandler}
    />
);

export default InputField;
