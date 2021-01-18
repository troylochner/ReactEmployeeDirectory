import React, { useContext } from "react";
import EmployeeRowData from "./EmployeeRowData";
import EmployeeContext from "../utils/EmployeeContext";
//import "./EmployeeTable.css";


const EmployeeTable = () => {

const context = useContext(EmployeeContext);

    return (
        <div className="empTable mt-5">
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        {context.employees.headings.map(({ name, width }) => {
                            return (
                                <th className="col" key={name} style={{ width }} 
                                
                                    //ON CLICK DISABLED FOR THE TIME
                                    onClick={() => {
                                        context.sortList(name.toLowerCase())
                                        context.arraySort(name.toLowerCase())
                                        ;}}>

                                    {name}

                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <EmployeeRowData/>
            </table>
        </div>
    );
}
export default EmployeeTable;