import { Component } from "react";
import classNames from "classnames";

import "./employees-list-item.css";

export class EmployeesListItem extends Component {
  render() {
    const { id, name, salary, deleteItem, rise, increase, onToggleProp } =
      this.props;

    return (
      <li
        className={classNames(
          "list-group-item d-flex justify-content-between",
          {
            increase,
            like: rise,
          }
        )}
      >
        <span
          className="list-group-item-label"
          data-toggle="rise"
          onClick={(event) =>
            onToggleProp(event.currentTarget.getAttribute("data-toggle"), id)
          }
        >
          {name}
        </span>
        <div className="d-flex">
          <input
            type="text"
            className="list-group-item-input"
            defaultValue={salary + "$"}
          />
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn-cookie btn-sm "
              data-toggle="increase"
              onClick={(event) =>
                onToggleProp(
                  event.currentTarget.getAttribute("data-toggle"),
                  id
                )
              }
            >
              <i className="fas fa-cookie"></i>
            </button>
            <button
              type="button"
              className="btn-trash btn-sm "
              onClick={() => deleteItem(id)}
            >
              <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </li>
    );
  }
}
