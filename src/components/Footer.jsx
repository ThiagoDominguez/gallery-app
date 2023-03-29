import React from "react";

const Footer = () => {
  return (
    <footer className="navbar navbar-dark bg-warning  justify-content-center mt-1">
      <span className="navbar-brand mb-0 h1 ">
        Thiago Dominguez - Todos los derechos reservados &copy;
        {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
