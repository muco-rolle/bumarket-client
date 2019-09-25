import { createGlobalStyle } from "styled-components";

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
        color: ${({ theme }) => theme.colors.secondary};
        font-family: ${({ theme }) => theme.fonts.body};
    }
    
    ::selection {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white}
    }
`;
