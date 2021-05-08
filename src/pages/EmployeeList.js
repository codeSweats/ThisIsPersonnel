import React, { useState, useEffect } from "react";
import Cards from "../components/Cards";
import API from "../utils/API"



function EmployeeList() {
    const [employee, setEmployee] = useState({
        
    });

    // useEffect(() => {
    //     const data = API.search()
    //     console.log(data)
    //     setEmployee(
    //     data
    //     )
    // }, []);

    const getEmployee = () => {
        const data = API.search();
        console.log(data);
        setEmployee(data);
    }

    getEmployee();

console.log(employee, "use state variable");

    {
        employee.map((element) => {

            return (
                <Cards
                    image={element.data.results.picture.medium}
                    name={element.data.results.name.first}
                    lastName={element.data.results.name.last} />
            )
        })
    }
};

export default EmployeeList;