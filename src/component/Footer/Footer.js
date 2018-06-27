import React from "react";
import "./Footer.css";

const Footer = props => {
    return (
        <footer className="Footer">
            <div>{props.footerText}</div>
        </footer>
    );
};

export default Footer;
