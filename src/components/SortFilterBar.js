import React, { useContext } from "react";
import EmployeeContext from "../utils/EmployeeContext";
const SortFilterBar = () => {

    const context = useContext(EmployeeContext);

    return (

    <div className="container">
        <div className='Row'>
        <div className='col-12'><p>Find Employees by Gender</p></div>
        <div className='col-12'>

            <input id="all" className="btn-check" type="radio" value='all' checked={context.employees.filterBy === "all"} onClick={event => context.filterEmployees(event)}></input>
            <label for="all" className="btn btn-neutral" for="all">All</label>

            <input id="male" className="btn-check" type="radio" value='male' checked={context.employees.filterBy === "male"} onClick={event => context.filterEmployees(event)}></input>
            <label for="male" className="btn btn-neutral" for="male">Men</label>
            
            <input id="female" className="btn-check" type="radio" value='female' checked={context.employees.filterBy === "female"} onClick={event => context.filterEmployees(event)}></input>
            <label for='female' className="btn btn-neutral" for="female">Women</label>

        </div>

        <div className='col-12'><p>Sort Employees by Age</p></div>
        <div className='col-12'>
            
            <input id="old" className="btn-check" type="radio" value='descend' checked={context.employees.order === "descend"} onClick={event => context.sortEmployees(event)}></input>
            <label for="old" className="btn btn-neutral" for="old">Old to Young </label>

            <input id="young" className="btn-check" type="radio" value='ascend' checked={context.employees.order === "ascend"} onClick={event => context.sortEmployees(event)}></input>
            <label for="young" className="btn btn-neutral" for="young">Young to Old</label>

        </div>
        </div>

    </div>

    );
}

export default SortFilterBar;