import React, { component, useContext } from "react";
import EmployeeDirectory from "./EmployeeDirectory";

const FilterBar = () => {
    
    return (
        <nav>
        <div className="searchbox">
            
            <form className="form-inline">
            
                <input
                    name="male"
                    type="radio"
                    value='male'
                    placeholder="Filter by Cohort"
                    aria-label="Search"
                    onChange={value => EmployeeDirectory.filterEmployees(value)}
                />  
                <label for="male">Men</label><br/>

                <input
                    type="radio"
                    name="female"
                    value="female"
                    placeholder="Filter by Cohort"
                    aria-label="Search"
                    onChange={value => EmployeeDirectory.filterEmployees(value)}
                />
                <label for="female">Women</label><br/>
                

                <hr></hr>

                <button className="btn my-2 my-sm-0" type="submit">
                    Reload
                 </button>
            </form>
        </div>
        </nav>
    );
}

export default FilterBar;