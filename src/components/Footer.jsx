import React from "react";

const Footer = () => {
    return (
        <nav className="navbar navbar-dark bg-warning justify-content-center mt-1  w-100">
            <span className="navbar-brand mb-0 h1">
                Thiago Dominguez -  &copy;
                {new Date().getFullYear()}
            </span>
        </nav>
    );
};

export default Footer;
