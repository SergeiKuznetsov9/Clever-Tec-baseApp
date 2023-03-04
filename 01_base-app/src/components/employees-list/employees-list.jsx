import { Component } from "react";

import { EmployeesListItem } from "../employees-list-item";

import "./employees-list.css";

export class EmployeesList extends Component {
  render() {
    const { employees, onToggleProp, deleteItem } = this.props;
    return (
      <ul className="app-list list-group">
        {employees.map((employee) => (
          <EmployeesListItem
            key={employee.id}
            {...employee}
            onToggleProp={onToggleProp}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    );
  }
}
