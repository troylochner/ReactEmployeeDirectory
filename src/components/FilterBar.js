import React, { useContext } from "react";
//import "./SearchEmployees.css";
import EmployeeContext from "../utils/EmployeeContext";
import EmployeeDirectory from "./EmployeeDirectory";


const FilterBar = () => {
    
    const context = useContext(EmployeeContext);

    return (
        <div className="searchbox">
            
            <form className="form-inline">
            
                <input
                    className="form-control mr-sm-2"
                    name="millenials"
                    type="radio"
                    value='<41'
                    placeholder="Filter by Cohort"
                    aria-label="Search"
                    onChange={filterName => EmployeeDirectory.filterEmployees(filterName)}
                />  
                <label for="millenials">Millenials</label><br/>

                <input
                    className="form-control mr-sm-2"
                    type="radio"
                    name="genx"
                    value='41...57'
                    placeholder="Filter by Cohort"
                    aria-label="Search"
                    onChange={filterName => EmployeeDirectory.filterEmployees(filterName)}
                />
                <label for="genx">Gen-X</label><br/>
                <input
                    className="form-control mr-sm-2"
                    type="radio"
                    name="boomers"
                    value='>57'
                    placeholder="Filter by Cohort"
                    aria-label="Search"
                    onChange={filterName => EmployeeDirectory.filterEmployees(filterName)}
                />
                <label for="boomers">Boomers</label><br/>

                <hr></hr>

                <button className="btn my-2 my-sm-0" type="submit">
                    Reload
                 </button>
            </form>
        </div>
    );
}

export default FilterBar;