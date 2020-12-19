import React, { useContext } from "react";
import "./EmployeeRowData.css"
import EmployeeContext from "../../utils/EmployeeContext";

const DataBody = () => {
    const context = useContext(EmployeeContext);

    //USE A CLEANER DATE FORMAT.
    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formattedDate =[month, day, year].join("-");
        return formattedDate;
    }
    return (
        <tbody>
        {context.employees.filteredUsers[0] !== undefined && context.employees.filteredUsers[0].name !== undefined ? (
          context.employees.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Image" className="align-middle">
                  <img
                    src={picture.medium}
                    alt={"profile image for " + name.first + " " + name.last}
                    className="img-responsive"
                  />
                </td>
                <td data-th="Full Name" className="name-cell align-middle">
                  {name.last}, {name.first}
                </td>
                <td data-th="Email" className="align-middle">
                  <a href={"mailto:" + email} target="__blank">
                    {email}
                  </a>
                </td>
                <td data-th="Age" className="align-middle">
                  {dob.age}
                </td>
                <td data-th="DOB" className="align-middle">
                  {formatDate(dob.date)}
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default DataBody;
