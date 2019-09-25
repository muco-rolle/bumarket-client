import React from "react";
import Header from "../header/Header";

const BackOfficeLayout = props => {
    return (
        <section>
            <Header />
            {props.children}
            <h5>footer</h5>
        </section>
    );
};

export default BackOfficeLayout;
