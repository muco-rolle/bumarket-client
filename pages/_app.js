import App from "next/app";

class Bumarket extends App {
    render() {
        const { Component, pageProps } = this.props;

        return <Component {...pageProps} />;
    }
}

export default Bumarket;
