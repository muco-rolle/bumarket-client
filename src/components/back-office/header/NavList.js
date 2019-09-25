import React from 'react'
import styled from 'styled-components';
import NavItem from './NavItem';

const StyledNavList = styled.ul`
    display: flex;
`


const NavList = () => {
    return (
        <StyledNavList>
            <NavItem url="/back-office/products">Products</NavItem>
            <NavItem url="/back-office/add-product">Add</NavItem>
        </StyledNavList>
    )
}

export default NavList
