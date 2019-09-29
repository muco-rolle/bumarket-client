import React from "react";
import Header from "../header/Header";

const BackOfficeLayout = props => {
    return (
        <section>
            <Header />
            {props.children}
        </section>
    );
};

export default BackOfficeLayout;
