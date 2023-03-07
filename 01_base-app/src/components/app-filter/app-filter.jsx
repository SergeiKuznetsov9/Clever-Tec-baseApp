import { Component } from "react";

import "./app-filter.css";

const filterButtons = [
  { name: "Все сотрудники", value: "" },
  { name: "На повышение", value: "rise" },
  { name: "З/П больше 1000$", value: "moreThan1000" },
];

export class AppFilter extends Component {
  render() {
    const { setFilter, actualFilter } = this.props;

    return (
      <div className="btn-group">
        {filterButtons.map((button) => (
          <button
            key={button.value}
            onClick={() => setFilter(button.value)}
            className={
              actualFilter === button.value
                ? "btn btn-light"
                : "btn btn-outline-light"
            }
          >
            {button.name}
          </button>
        ))}
      </div>
    );
  }
}
