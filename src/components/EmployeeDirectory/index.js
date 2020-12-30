import React, {useState, useEffect} from "react";
import EmployeeTable from "../EmployeeTable";
import Nav from "../Nav";
import API from "../../utils/API";
import "./EmployeeDirectory.css";
import EmployeeContext from "../../utils/EmployeeContext"


const EmployeeDirectory = () => {
        const [ employees , setEmployeeState] = useState({
            users: [],
            order: "ascend",
            filteredUsers: [],
            headings: [{
                    name: "",
                    width: "10%",
                },
                {
                    name: "Name",
                    width: "20%",
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
    
/*
        //BEGIN SORT PROCESS
      const sortList = heading => {
        if (employees.order === "descend") {
            setEmployeeState({
                order:"ascend"
            })
        } else {
            setEmployeeState({
                order:"descend"
            })
        }
        
    
        const compareFnc = (a, b) => {
          if (employees.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
return b[heading]-  a[heading];
        }
    }
    }

        const sortedUsers = employees.filteredUsers.sort(compareFnc);

        setEmployeeState({
          ...employees,
          filteredUsers: sortedUsers
});

console.log(`Sort by ${heading} ${employees.order}`)
        //END SORT PROCESS
 }; 
*/

/*
//BEGIN FILTER PROCESS
      const filterEmployees = event => {
        const filter = event.target.value;
        const filteredList = employees.users.filter(item => {
          let values = item.name.last.toLowerCase() ;
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setEmployeeState({ 
        ...employees, 
        filteredUsers: filteredList });
      };

//END FILTER PROCESS
*/

//GET USER INFORMATION FROM THE API
      useEffect(() => {
        API.getEmployeeList().then(results => {
          setEmployeeState({
            ...employees,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, []);
    

      return (
            //<EmployeeContext.Provider value={{ employees, filterEmployees, sortList }}>
            <EmployeeContext.Provider value={{ employees }}>
            <Nav />
              <div className="data-area"> {employees.filteredUsers.length > 0 ? <EmployeeTable />: <div></div>}
              </div>
            </EmployeeContext.Provider>
          );
        }
    
    export default EmployeeDirectory;