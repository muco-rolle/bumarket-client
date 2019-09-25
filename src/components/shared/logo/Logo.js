import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLogo = styled.div`
    img {
        display: inline-block;
        width: 13rem;
    }
`;

const Logo = props => {
    return (
        <StyledLogo>
            <Link href={props.url}>
                <a>
                    <img
                        src="/static/images/bumarket-logo.png"
                        alt="bumarket logo"
                    />
                </a>
            </Link>
        </StyledLogo>
    );
};

export default Logo;
