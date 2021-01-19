import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
const SortFilterBar = () => {
    
    const context = useContext(EmployeeContext);

    return (
       
        <nav>
        <div className="center-float-radio">
        
            <form className="form-inline">
                <input name="all" type="radio" value='all' checked={context.employees.filterBy ==="all"} onClick={event => context.filterEmployees(event)}/>  
                <label for="all">All</label><br/>
                <input name="male" type="radio" value='male' checked={context.employees.filterBy ==="male"} onClick={event => context.filterEmployees(event)}/>  
                <label for="male">Men</label><br/>
                <input name="female" type="radio" value='female' checked={context.employees.filterBy ==="female"}  onClick={event => context.filterEmployees(event)}/>  
                <label for="female">Women</label><br/>
            </form>
            

            <form className="form-inline">
                <input name="old" type="radio" value='descend'  checked={context.employees.order ==="descend"} onClick={event => context.sortEmployees(event)}/>  
                <label for="old">Old to Young </label><br/>
                <input name="young" type="radio" value='ascend' checked={context.employees.order ==="ascend"}  onClick={event => context.sortEmployees(event)}/>  
                <label for="young">Young to Old</label><br/>
            </form>



        </div>
      
        </nav>
    );
}

export default SortFilterBar;