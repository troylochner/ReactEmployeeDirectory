import React, {useState, useEffect} from "react";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";
import SortFilterBar from "./SortFilterBar"
//import "./EmployeeDirectory.css";

//STORE CONTEXT HERE -->
import EmployeeContext from "../utils/EmployeeContext"

let employees = [];
let filteredEmployees = [];

const EmployeeDirectory = () => {
        const [ employees , setEmployeeState] = useState({
            //Start out the employees as an empty array. 
            employees: [],
            //Begin filtered employees list as an empty array. 
            filteredEmployees: [],
            //default the sort order to ascending
            order: "ascend",
            //Declare the our default sort mode should be by name. This is the most logical way to do so. 
            orderHeading :"Name",
        
            //HEADINGS ARE TO BE PASSED INTO OUR EMP TABLE --> THIS PROVIDES SIZING AND NAMES FOR OUR COLUMNS
            headings: [{
                name: "",
                width: "10%",
            },
            {
                name: "First",
                width: "10%",
            },
            {
                name: "Last",
                width: "10%",
            },
            {
                name: "Email",
                width: "20%",
            },
            {
                name: "Age",
                width: "15%",
            },
            {
                name: "Birthday",
                width: "15%",
            }
            ]
        });
        //ADD SORT
        const sortEmployees = event =>{

        }

        const filterEmployees = event =>{
            console.log('fire')
            const filterBy = event.target.value;
            //console.log(filterBy);
            const toFilter = employees.employees
            //console.log(toFilter);
            const y = toFilter.filter(person => {
                switch (filterBy) {
                    case 'all':
                    return toFilter
                    break;
                    default:
                    return person.gender === filterBy;
                    break
                };
            });
            //console.log(y)
            //AFTER FILTER HAS BEEN APPLIED ---> SET THE EMPLOYEE STATE AGAIN --> JUST FOR THE FILTERED GROUP
            setEmployeeState({ ...employees, filteredEmployees: y });
                
        }

        //USE EFFECT HOOK TO USE API AND RETURN BACK EMPLOYEE RESULTS
useEffect(() => {
    API.getEmployeeList().then(results => {
        // DIRECTORY INITIAL STATE WILL CLEAR ALL ARRAYS
        setEmployeeState({ ...employees, employees: results.data.results, filteredEmployees: results.data.results, order: "descend" });
        //console.log(results.data.results);
    });
}, [] );


  

//RETURN AND RENDER THE JSX
      return (
       
        <EmployeeContext.Provider value={{ employees, filterEmployees,  sortEmployees }}>
            <SortFilterBar/>
            <div className="data-area"> {employees.filteredEmployees.length > 0 ? 
            <EmployeeTable />:<div> NO MATCHING NAMES FOUND </div>}
            </div>
        </EmployeeContext.Provider>
       

    );
};



export default EmployeeDirectory;