import { createGlobalStyle } from "styled-components";
import { color, font } from "../../../utils/helpers";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%; // 10px
        box-sizing: border-box;
    }

    body {
        line-height: 1.5;
        color: ${color("grey")};
        font-family: ${font("body")};
        font-size: ${font("sizeBase")};
    }
    
    ::selection {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white}
    }
`;
