import React from "react";
import "./Header.css";

const Header = props => {
    return <header className="Header">{props.headerTitle}</header>;
};

export default Header;
