import React from "react";
import "./Header.css";

const Header = props => {
    return (
        <header className="Header">
            <div>{props.headerTitle}</div>
            <div className="Header_logo">logo here</div>
        </header>
    );
};

export default Header;
