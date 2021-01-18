import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
const FilterBar = () => {
    
    const context = useContext(EmployeeContext);
    
    return (
        <nav>
        <div className="searchbox">
            
            <form className="form-inline">
                <input name="male" type="radio" value='male' onClick={event => context.filterEmployees(event)}/>  
                <label for="male">Males</label><br/>
                <input name="female" type="radio" value='female' onClick={event => context.filterEmployees(event)}/>  
                <label for="female">Females</label><br/>
            </form>
        </div>
        </nav>
    );
}

export default FilterBar;