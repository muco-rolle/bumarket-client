import React from "react";
import Head from "next/head";
import BackOfficeLayout from "../../src/components/back-office/layouts/BackOfficeLayout";

const DashboardPage = () => {
    return (
        <div>
            <Head>
                <title>Bumarket - Dashboard</title>
            </Head>
            <h1>Dashboard Page</h1>
        </div>
    );
};

DashboardPage.Layout = BackOfficeLayout;

export default DashboardPage;
