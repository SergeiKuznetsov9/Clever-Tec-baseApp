import { Component } from "react";

import { AppInfo } from "../app-info";
import { SearchPanel } from "../search-panel";
import { AppFilter } from "../app-filter";
import { EmployeesList } from "../employees-list";
import { EmployeesAddForm } from "../employees-add-form";

import "./app.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "John Rembo", salary: 800, increase: false },
        { id: 2, name: "Lyon Gauthier", salary: 3000, increase: true },
        { id: 3, name: "Gabe Walker", salary: 5000, increase: false },
      ],
      maxId: 4,
    };
  }

  addItem(name, salary) {
    const newState = {
      id: this.state.maxId + 1,
      data: [
        ...this.state.data,
        {
          id: this.state.maxId,
          name,
          salary,
          increase: false,
        },
      ],
    };

    this.setState(() => newState);
  }

  deleteItem(id) {
    const newEmployeesArray = this.state.data.filter(
      (employee) => employee.id !== id
    );
    this.setState({
      data: newEmployeesArray,
    });
  }

  render = () => (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList
        employees={this.state.data}
        deleteItem={(id) => this.deleteItem(id)}
      />
      <EmployeesAddForm
        addItem={(name, salary) => this.addItem(name, salary)}
      />
    </div>
  );
}
