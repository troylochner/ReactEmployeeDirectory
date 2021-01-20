import React, { useContext } from "react";
import EmployeeRowData from "./EmployeeRowData";
import EmployeeContext from "../utils/EmployeeContext";



const EmployeeTable = () => {

const context = useContext(EmployeeContext);

    return (
        <div>
            <table id="table" className="table table-striped table-hover table-condensed">
                <thead>
                    <tr>
                        {context.employees.headings.map(({ name, width }) => {
                            return (
                                <th className="col" key={name} style={{ width }} >{name}</th>
                            )
                        })}
                    </tr>
                </thead>
                <EmployeeRowData/>
            </table>
        </div>
    )
}
export default EmployeeTable;