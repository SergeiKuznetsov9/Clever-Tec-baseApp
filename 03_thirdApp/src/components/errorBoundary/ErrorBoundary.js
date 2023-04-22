import { Component } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

export class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(err, info) {
    console.log(err, info);
    this.setState({
      error: true,
    });
  }

  render() {
    return this.state.error ? <ErrorMessage /> : this.props.children;
  }
}
