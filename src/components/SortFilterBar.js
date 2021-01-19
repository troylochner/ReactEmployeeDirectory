import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
const SortFilterBar = () => {

    const context = useContext(EmployeeContext);

    return (
<nav>
    <div className="container">
        
            <p>Filter Employees by Gender</p>
            <div className="btn-group-toggle" data-toggle="buttons">

                <label className="btn btn-secondary" for="all">
                <input id="all" className="btn-check" type="radio" value='all' checked={context.employees.filterBy === "all"} onClick={event => context.filterEmployees(event)}></input>
                All
                </label>

                <label className="btn btn-secondary" for="male">
                <input id="male" className="btn-check" type="radio" value='male' checked={context.employees.filterBy === "male"} onClick={event => context.filterEmployees(event)}></input>
                Men
                </label>

                <label className="btn btn-secondary" for="female">
                <input id="female" className="btn-check" type="radio" value='female' checked={context.employees.filterBy === "female"} onClick={event => context.filterEmployees(event)}></input>
                Women
                </label>

            </div>

            <div className="btn-group-toggle" data-toggle="buttons">

                <p>Sort Employees by Age</p>

                <label className="btn btn-secondary" for="old">
                <input id="old" className="btn-check" type="radio" value='descend' checked={context.employees.order === "descend"} onClick={event => context.sortEmployees(event)}></input>
                Old to Young </label>

                <label className="btn btn-secondary" for="young">
                <input id="young" className="btn-check" type="radio" value='ascend' checked={context.employees.order === "ascend"} onClick={event => context.sortEmployees(event)}></input>
                Young to Old
                </label>


            </div>
        
    </div>
</nav>
    );
}

export default SortFilterBar;