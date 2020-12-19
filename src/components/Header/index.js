import React from "react";
import "./Header.css";
import Nav from "../Nav";
function Header () {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click on a column header to sort our results.</p>
            <Nav />
        </div>
    )
}

export default Header;


