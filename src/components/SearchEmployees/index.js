import React, { useContext } from "react";
import "./SearchEmployees.css";
import EmployeeContext from "../../utils/EmployeeContext";


const SearchName = () => {
    const context = useContext(EmployeeContext);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Filter by Last Name"
                    aria-label="Search"
                    onChange={e => context.filterEmployees(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Reload
                 </button>
            </form>
        </div>
    );
}

export default SearchName;