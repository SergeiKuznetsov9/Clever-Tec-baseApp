import { createContext, useReducer } from "react";
import { Main } from "./pages/main/Main";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    default:
      return state;
  }
};

export const CounterContext = createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      <Main />
    </CounterContext.Provider>
  );
}

export default App;
