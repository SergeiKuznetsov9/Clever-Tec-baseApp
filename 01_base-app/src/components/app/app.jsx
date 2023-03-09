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
        { id: 1, name: "John Rembo", salary: 800, increase: false, rise: true },
        {
          id: 2,
          name: "Lyon Gauthier",
          salary: 3000,
          increase: true,
          rise: false,
        },
        {
          id: 3,
          name: "Gabe Walker",
          salary: 5000,
          increase: false,
          rise: false,
        },
      ],
      term: "",
      filter: "all",
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
          rise: false,
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

  onToggleProp(propType, id) {
    const newEmployeesArray = this.state.data.map((employee) => {
      if (employee.id === id) employee[propType] = !employee[propType];
      return employee;
    });

    this.setState(() => ({
      data: newEmployeesArray,
    }));
  }

  defineAmountOfGetedBonus(employeesList) {
    return employeesList.filter((employee) => employee.increase === true)
      .length;
  }

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);

      case "moreThan1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  searchEmployee(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) =>
      item.name.toLowerCase().includes(term.trim().toLowerCase())
    );
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { data, term, filter } = this.state;
    const employeesForRender = this.filterPost(
      this.searchEmployee(data, term),
      filter
    );

    return (
      <div className="app">
        <AppInfo
          totalAmount={data.length}
          willGetBonusAmount={this.defineAmountOfGetedBonus(data)}
        />
        <div className="search-panel">
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}
            onFilterSelect={this.onFilterSelect}
          />
          <AppFilter setFilter={this.onFilterSelect} actualFilter={filter} />
        </div>
        <EmployeesList
          employees={employeesForRender}
          onToggleProp={(propType, id) => this.onToggleProp(propType, id)}
          deleteItem={(id) => this.deleteItem(id)}
        />
        <EmployeesAddForm
          addItem={(name, salary) => this.addItem(name, salary)}
        />
      </div>
    );
  }
}
