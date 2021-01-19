import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
const SortFilterBar = () => {
    
    const context = useContext(EmployeeContext);
    
    return (
        <nav>
        <div>

            <form className="form-inline">
                <input name="all" type="radio" value='all' checked={true} onClick={event => context.filterEmployees(event)}/>  
                <label for="all">All</label><br/>
                <input name="male" type="radio" value='male' onClick={event => context.filterEmployees(event)}/>  
                <label for="male">Men</label><br/>
                <input name="female" type="radio" value='female' onClick={event => context.filterEmployees(event)}/>  
                <label for="female">Women</label><br/>
            </form>

            <form className="form-inline">
                <input name="old" type="radio" value='old' checked={true} onClick={event => context.filterEmployees(event)}/>  
                <label for="old">`Old to Young` </label><br/>
                <input name="young" type="radio" value='young' onClick={event => context.filterEmployees(event)}/>  
                <label for="young">Young to Old</label><br/>
            </form>


        </div>
        </nav>
    );
}

export default SortFilterBar;