import React from "react";
import "./Header.css";

const Header = props => {
    return (
        <header className="Header">
            <div>{props.headerTitle}</div>
            <div className="Header_logo">
                <img src={require("../../img/cube.png")} alt="" width="100" />
            </div>
        </header>
    );
};

export default Header;
