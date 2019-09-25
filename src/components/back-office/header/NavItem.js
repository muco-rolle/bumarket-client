import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const StyledNavItem = styled.li`
    list-style-type: none;
    a {
        text-decoration: none;
    }
`

const NavItem = (props) => {
    return (
        <StyledNavItem>
            <Link href={props.url}>
                <a>{props.children}</a>
            </Link>
        </StyledNavItem>
    )
}

export default NavItem
