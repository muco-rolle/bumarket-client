import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const StyledNavList = styled.ul`
    display: flex;
`;

const NavList = () => {
    return (
        <StyledNavList>
            <NavItem url="/back-office/products">products</NavItem>
            <NavItem url="/back-office/add-product">add</NavItem>
        </StyledNavList>
    );
};

export default NavList;
