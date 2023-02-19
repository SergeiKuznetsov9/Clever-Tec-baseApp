import { AppInfo } from "../app-info";
import { SearchPanel } from "../search-panel";
import { AppFilter } from "../app-filter";
import { EmployeesList } from "../employees-list";
import { EmployeesAddForm } from "../employees-add-form";
import "./app.css";

export const App = () => (
  <div className="app">
    <AppInfo />
    <div className="search-panel">
      <SearchPanel />
      <AppFilter />
    </div>
    <EmployeesList />
    <EmployeesAddForm />
  </div>
);
