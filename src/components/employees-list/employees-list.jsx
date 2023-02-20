import { EmployeesListItem } from "../employees-list-item";
import "./employees-list.css";
import { employeesStack } from "../../mockData/employees";

export const EmployeesList = () => (
  <ul className="app-list list-group">
    {employeesStack.map(({ id, ...itemProps }) => (
      <EmployeesListItem key={id} {...itemProps} />
    ))}
  </ul>
);
