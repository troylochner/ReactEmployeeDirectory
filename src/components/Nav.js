import React from 'react';
import FilterBar from "./FilterBar";
//import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <FilterBar />
    </div>
</nav>
    );
}
export default Nav;