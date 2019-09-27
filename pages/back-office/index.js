import React from "react";
import BackOfficeLayout from "../../src/components/back-office/layouts/BackOfficeLayout";
import { Button } from "../../src/components/styles/Button";

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <Button color="primary">primary</Button>

        </div>
    );
};

DashboardPage.Layout = BackOfficeLayout;

export default DashboardPage;
