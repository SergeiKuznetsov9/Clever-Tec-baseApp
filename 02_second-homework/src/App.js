import { Component } from "react";
import { operationTypes } from "./operationTypes";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.counter };
  }

  increment = (prevState) => {
    if (prevState.counter < 10) return { counter: prevState.counter + 1 };
  };

  decrement = (prevState) => {
    if (prevState.counter > -10) return { counter: prevState.counter - 1 };
  };

  handleClick = (operationType) => {
    switch (operationType) {
      case operationTypes.increment:
        this.setState(this.increment);
        break;

      case operationTypes.decrement:
        this.setState(this.decrement);
        break;

      case operationTypes.random:
        this.setState({
          counter: +(Math.random() * (10 - -10) + -10).toFixed(0),
        });
        break;

      case operationTypes.reset:
        this.setState({ counter: 0 });
        break;

      default:
        return;
    }
  };

  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.counter}</div>
        <div className="controls">
          <button onClick={() => this.handleClick(operationTypes.increment)}>
            INC
          </button>
          <button onClick={() => this.handleClick(operationTypes.decrement)}>
            DEC
          </button>
          <button onClick={() => this.handleClick(operationTypes.random)}>
            RND
          </button>
          <button onClick={() => this.handleClick(operationTypes.reset)}>
            RESET
          </button>
        </div>
      </div>
    );
  }
}
export default App;
