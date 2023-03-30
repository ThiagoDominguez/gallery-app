import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
const Container = () => {
    return (
        <div className="container-xxl-16   container-xl-14 container-lg-12 container-md-10 container-sm-6 container-fluid    m-0 p-0">
            <Header />
            <div className="container border ">
                <Cards />
            </div>
            <Footer />
        </div>

    );
};

export default Container;
