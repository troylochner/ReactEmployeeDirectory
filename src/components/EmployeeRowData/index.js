import React, { useContext } from "react";
import "./EmployeeRowData.css"
import EmployeeContext from "../../utils/EmployeeContext";
import Moment from 'react-moment'; // USING REACT MOMENT SO WE CAN HANDLE THE DATE OF BIRTH MORE CLEANLY

const DirectoryBody = () => {
    
  const context = useContext(EmployeeContext);

    return (
        <tbody> 
          
          {context.employees.filteredUsers[0] !== undefined && context.employees.filteredUsers[0].name !== undefined ? 
          (context.employees.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
            
            return (

              <tr key={login.uuid}>

                <td data-th="Image" className="img-hover-zoom img-hover-zoom--xyz">
                  <img src={picture.large} alt={"profile image for " + name.first + " " + name.last} className="img-responsive"/>
                </td>

                <td data-th="Fullname" className="fname align-middle"> {name.last}, {name.first} </td>

                <td data-th="Email" className="align-middle"><a href={"mailto:" + email} target="__blank"> {email} </a></td>

                <td data-th="Age" className="align-middle">{dob.age} </td>

                <td data-th="DOB" className="align-middle"> <Moment format="YYYY/MM/DD">{dob.date}</Moment></td>

              </tr>
            );
          })
        ) : (<></>)};
      </tbody>
    );
  }
  
  export default DirectoryBody;
