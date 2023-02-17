import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";
import { employeesStack } from "../../mockData/employees";

const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      {employeesStack.map((employee) => {
        const { id, ...itemProps } = employee;
        return <EmployeesListItem key={id} {...itemProps} />;
      })}
    </ul>
  );
};

export default EmployeesList;
