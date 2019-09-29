import React from "react";
import styled from "styled-components";
import { space, color, font } from "../../../utils/helpers";

const StyledTextAreaField = styled.textarea`
    padding: ${space("small3")} ${space("medium")};
    width: 100%;
    /* border: 2px solid ${color("greyLight3")}; */
    border: 1px solid #E3E3E3;
    border-radius: 3px;
    outline: none;
    font-family: inherit;
    font-size: ${font("sizeMedium")};
    font-weight: 800;
    color: inherit;
    transition: all 0.3s ease;
    :focus {
        border-color: ${color("greyLight2")};
    }
`;
const TextAreaField = props => (
    <StyledTextAreaField
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChangeHandler}
        cols="20"
        rows="5"
    />
);

export default TextAreaField;
