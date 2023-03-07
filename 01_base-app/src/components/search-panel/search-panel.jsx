import { Component } from "react";

import "./search-panel.css";

export class SearchPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    };
  }

  handleChange(searchValue) {
    this.setState({
      searchValue,
    });

    this.props.onUpdateSearch(searchValue);
  }

  render = () => (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={this.state.searchValue}
      onChange={(event) => this.handleChange(event.target.value)}
    />
  );
}
