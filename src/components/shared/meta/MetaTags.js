import React from "react";
import NextHead from "next/head";

const MetaTags = () => {
    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <link
                rel="shortcut icon"
                href="/static/images/favicon.png"
                type="image/x-icon"
            />
            <link href="/static/css/nprogress.css"></link>

            <title>Bumarket</title>
        </NextHead>
    );
};

export default MetaTags;
