import React from "react";
import Logo from "../../shared/logo/Logo";
import Nav from "./Nav";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    height: 7rem;
    padding: 0 4rem;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.06);
`;


const Header = () => {
    return (
        <StyledHeader>
            <Logo url="/back-office" />
            <Nav />
        </StyledHeader>
    );
};

export default Header;
