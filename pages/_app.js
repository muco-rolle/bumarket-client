import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import MainLayout from "../src/components/shared/main-layout/MainLayout";
import withApollo from "../client";
import { ApolloProvider } from "react-apollo";

Router.events.on("routeChangeStart", () => NProgress.start());

Router.events.on("routeChangeComplete", () => NProgress.done());

Router.events.on("routeChangeError", () => NProgress.done());

class Bumarket extends App {
    render() {
        const { Component, pageProps, apollo } = this.props;
        const Layout = Component.Layout || MainLayout;

        return (
            <ApolloProvider client={apollo}>
                <MainLayout>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </MainLayout>
            </ApolloProvider>
        );
    }
}

export default withApollo(Bumarket);
