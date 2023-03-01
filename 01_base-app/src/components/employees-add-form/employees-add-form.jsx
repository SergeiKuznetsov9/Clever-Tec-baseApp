import { Component } from "react";

import "./employees-add-form.css";

export class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.salary) {
      this.props.addItem(this.state.name, this.state.salary);
      this.setState({
        name: "",
        salary: "",
      });
    }
  };

  render = () => (
    <div className="app-add-form">
      <div className="app-add-form-hint">Добавьте нового сотрудника</div>
      <form
        className="add-form d-flex"
        onSubmit={(event) => this.onSubmit(event)}
      >
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
          className="form-control new-post-label"
          placeholder="Как его зовут?"
        />
        <input
          type="number"
          name="salary"
          value={this.state.salary}
          onChange={(event) => this.handleChange(event)}
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
}
