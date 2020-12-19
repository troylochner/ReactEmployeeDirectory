import React, { useContext } from "react";
import EmployeeRowData from "../EmployeeRowData";
import "./EmployeeTable.css";
import EmployeeContext from "../../utils/EmployeeContext";

const EmployeeTable = () => {
    const context = useContext(EmployeeContext);

    return (

        <div className="empTable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
                    <tr>
                        {context.employees.headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                    onClick={() => {
                                        context.handleSort(name.toLowerCase());
                                    }}
                                >
                                    {name}
                                    <span className="pointer"></span>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <EmployeeRowData />
            </table>
        </div>
    );
}

export default EmployeeTable;