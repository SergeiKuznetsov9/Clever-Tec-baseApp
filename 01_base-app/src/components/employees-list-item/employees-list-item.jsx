import "./employees-list-item.css";
import classNames from "classnames";
import { Component } from "react";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rise: false,
      bonus: this.props.increase,
    };
  }

  onRise() {
    this.setState((prevState) => ({ rise: !prevState.rise }));
  }

  onBonus() {
    this.setState((prevState) => ({ bonus: !prevState.bonus }));
  }

  render() {
    return (
      <li
        className={classNames(
          "list-group-item d-flex justify-content-between",
          {
            increase: this.state.bonus,
            like: this.state.rise,
          }
        )}
      >
        <span className="list-group-item-label" onClick={() => this.onRise()}>
          {this.props.name}
        </span>
        <div className="d-flex">
          <input
            type="text"
            className="list-group-item-input"
            defaultValue={this.props.salary + "$"}
          />
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn-cookie btn-sm "
              onClick={() => this.onBonus()}
            >
              <i className="fas fa-cookie"></i>
            </button>
            <button type="button" className="btn-trash btn-sm ">
              <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </li>
    );
  }
}

export { EmployeesListItem };
