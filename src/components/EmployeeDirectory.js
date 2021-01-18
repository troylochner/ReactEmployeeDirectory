import React, {useState, useEffect} from "react";
import EmployeeTable from "./EmployeeTable";
import Nav from "./Nav";
import API from "../utils/API";
//import "./EmployeeDirectory.css";

//STORE CONTEXT HERE -->
import EmployeeContext from "../utils/EmployeeContext"

let workers = [];

const EmployeeDirectory = () => {
        const [ employees , setEmployeeState] = useState({
            //Start out the employees as an empty array. 
            workers: [],
            //default the sort order to ascending
            order: "ascend",
            //Declare the our default sort mode should be by name. This is the most logical way to do so. 
            orderHeading :"Name",
            //Begin filtered employees list as an empty array. 
            filteredWorkers: [],
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

        //ADD SORT FUNCTION

        //const sortList

             
         
        //ADD FILTER FUNCTION
       
        //const filterList
        
        //USING FILTERING PROCESS DERIVED FROM https://stackoverflow.com/questions/33772718/how-to-filter-array-values-greater-than-x/33772764 /

        //GET USER INFORMATION FROM THE API
        //USING USEEFFECT TO GET MY API RESULTS
useEffect(() => {
    API.getEmployeeList().then(results => {
        //SET BOTH ARRAYS TO OUR RESULTS --> THE USERS BEING THE FULL LIST / FILTERED BEING THE REDUCED LIST
        setEmployeeState({...employees, workers: results.data.results ,filteredWorkers: results.data.results, order: "descend"  });
        console.log(results.data.results);
    });
}, [] );

/*
function filterEmployees(string) {
    const filteredEmp = workers.filter(worker => {
        switch (string) {
            case 'boomers':
                return (employees.dob.age > 57)
                break;
            case 'millenial':
                return (employees.dob.age < 41)
                break;
        }; 
        setEmployeeState({...employees, filteredWorkers: filteredEmp});
    })
}

function sortEmployees(){
    const filteredEmp = workers.sort((a,b)=>a-b)
    return filteredEmp;
}    
*/

//RETURN AND RENDER THE JSX
      return (
        
    <EmployeeContext.Provider value={{ employees, /* filterEmployees,  sortList*/ }}>
        <Nav/>
        {/* if no names are found matching the filter display that in place of the table*/}
        <div className="data-area"> {employees.filteredWorkers.length > 0 ? <EmployeeTable/>: 
        
        <div>
            NO MATCHING NAMES FOUND ..
        </div>
        
        }
       
       </div>

       </EmployeeContext.Provider>

          );
        };
    
    export default EmployeeDirectory;