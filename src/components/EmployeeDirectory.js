import React, {useState, useEffect} from "react";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";
import FilterBar from "./FilterBar"
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
        //ADD FILTER
        //ADD SORT

        const filterEmployees = event =>{
            const filterBy = event.target.value;
            console.log(filterBy)
            /*const filterGroup = employees.filter(worker => {
                switch (filterBy) {
                    case 'male':
                        return (employees.gender==='male')
                        break;
                    case 'female':
                        return (employees.gender==='female')
                        break;
                }; 

            });
            setEmployeeState({ 
                ...employees, 
                filteredUsers: filterGroup });
                */
        }


        /*const filterEmployees = event => {
                const filter = event.target.value;
                const filteredList = employees.users.filter(item => {
                  let values = item.gender.last.toLowerCase() ;
                  return values.indexOf(filter.toLowerCase()) !== -1;
                });
            
                setEmployeeState({ 
                ...employees, 
                filteredUsers: filteredList });
              };*/

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
       
        <EmployeeContext.Provider value={{ employees, filterEmployees,  /*sortList*/ }}>
            <FilterBar/>
            <div className="data-area"> {employees.filteredEmployees.length > 0 ? 
            <EmployeeTable />:<div> NO MATCHING NAMES FOUND </div>}
            </div>
        </EmployeeContext.Provider>
       

    );
};



export default EmployeeDirectory;