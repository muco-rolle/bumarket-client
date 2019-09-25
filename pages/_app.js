import App from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress"

import MainLayout from "../src/components/shared/main-layout/MainLayout";

// route navigation visualization
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


class Bumarket extends App {
    render() {
        const { Component, pageProps } = this.props;
        const Layout = Component.Layout || MainLayout;

        return (
            <MainLayout>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MainLayout>
        );
    }
}

export default Bumarket;
