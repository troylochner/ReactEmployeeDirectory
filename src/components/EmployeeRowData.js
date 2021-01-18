import React, { useContext } from "react";
import "./EmployeeRowData.css"
import EmployeeContext from "../utils/EmployeeContext";
import Moment from 'react-moment'; // USING REACT MOMENT SO WE CAN HANDLE THE DATE OF BIRTH MORE CLEANLY

const EmployeeRowData = () => {
    
  const context = useContext(EmployeeContext);

    return (
        <tbody> 
          
          {context.employees.filteredEmployees[0] !== undefined && context.employees.filteredEmployees[0].name !== undefined ? 
          
          (context.employees.filteredEmployees.map(({ login, name, picture, phone, email, dob }) => {
            
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="img-hover-zoom img-hover-zoom--xyz">
                  <img src={picture.large} alt={"profile image for " + name.first + " " + name.last} className="img-responsive"/>
                </td>
                <td data-th="First" className="fname align-middle"> {name.first} </td>
                <td data-th="Last" className="fname align-middle"> {name.last}</td>
                <td data-th="Email" className="align-middle"><a href={"mailto:" + email} target="__blank"> {email} </a></td>
                <td data-th="Age" className="align-middle">{dob.age} </td>
                <td data-th="DOB" className="align-middle"> <Moment format="YYYY/MM/DD">{dob.date}</Moment></td>
              </tr>
            );
          })
        ) : (<>NOTHING TO SEE HERE</>)};

      </tbody>
    );
  }
  
  export default EmployeeRowData;