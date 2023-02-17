import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";
import { useState } from "react";
import { employeesStack } from "../../mockData/employees";

const EmployeesList = () => {
  const [employees, setEmployees] = useState(employeesStack);

  const changeName = () => {
    let result = [...employees];
    result[0] = { id: 4, name: "Frank Dukes", salary: 800, increase: false };
    setEmployees(result);
  };

  return (
    <ul className="app-list list-group">
      {employees.map((employee) => {
        const { id, ...itemProps } = employee;
        return <EmployeesListItem key={id} {...itemProps} />;
      })}
      <br />
      <button       
        type="button"
        onClick={changeName}
      >
        Change Name
      </button>
    </ul>
  );
};

export default EmployeesList;
