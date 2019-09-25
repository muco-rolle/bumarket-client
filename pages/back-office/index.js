import React from "react";
import BackOfficeLayout from "../../src/components/back-office/layouts/BackOfficeLayout";
import { Button } from "../../src/components/styles/Button";

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Button color="white" bg="primary" py="1.1rem" px="2.2rem" ml="4rem">primary</Button>

        </div>
    );
};

DashboardPage.Layout = BackOfficeLayout;

export default DashboardPage;
