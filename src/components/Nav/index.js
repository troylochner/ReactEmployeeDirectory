import React from 'react';
import SearchEmployees from "../SearchEmployees";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <SearchEmployees />
    </div>
</nav>
    );
}
export default Nav;