import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { space } from "../../../utils/helpers";

const StyledNavItem = styled.li`
    list-style-type: none;
    :not(:last-child) {
        margin-right: ${space("large")};
    }
    a {
        text-decoration: none;
        font-size: ${space("medium")};
        color: inherit;

        :hover {
            font-weight: 800;
        }
    }
`;

const NavItem = props => {
    return (
        <StyledNavItem>
            <Link href={props.url}>
                <a>{props.children}</a>
            </Link>
        </StyledNavItem>
    );
};

export default NavItem;
