import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import API from "../utils/API";

function EmployeeList() {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {getEmployee()}, []);

    const getEmployee = () => {
        API.search()
            .then((res) => {
                console.log(res, "results from axios");
                setEmployee(res.data.results);
                console.log(employee, "is this in there")
            })
    }

    

    return (
        <div className="container">
            {
                employee.map((employees) =>
                    <Cards image={employees.picture.large}
                        name={employees.name.first}
                        lastName={employees.name.last}
                        phone={employees.phone}
                        email={employees.email} />
                )
            }
        </div>
    )
};

export default EmployeeList;