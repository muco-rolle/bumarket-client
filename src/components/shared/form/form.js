import React from "react";
import styled from "styled-components";
import { space, font } from "../../../utils/helpers";

const StyledForm = styled.form`
    width: 40%;
    padding: ${space("large")} ${space("large3")};
    margin: 50px 0;
    box-shadow: ${({ theme }) => theme.shadows.card};
    border-radius: ${space("small")};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
        margin-bottom: ${space("small")};
    }

    h3 {
        font-size: ${font("sizeLarge2")};
        text-align: center;
        margin-bottom: ${space("medium")};
    }

    button {
        text-align: center;
    }
`;
const Form = props => {
    return (
        <StyledForm onSubmit={props.onSubmitHandler}>
            <h3>{props.title}</h3>
            {props.children}
        </StyledForm>
    );
};

export default Form;
