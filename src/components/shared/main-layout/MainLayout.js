import React from "react";

// fonts
import "typeface-karla";
import MetaTags from "../meta/MetaTags";
import { GlobalStyles } from "../../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

import "typeface-alegreya-sans";
import "typeface-pacifico";

const MainLayout = props => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <MetaTags />
                <GlobalStyles />
                {props.children}
            </>
        </ThemeProvider>
    );
};

export default MainLayout;
