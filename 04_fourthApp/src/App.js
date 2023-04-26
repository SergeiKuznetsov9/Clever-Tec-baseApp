import { createContext, useReducer } from "react";
import { Main } from "./pages/main/Main";
import {
  singleCounterInitialState,
  singleCounterReducer,
} from "./store/singleCounterReducer/singleCounterReducer";

export const CounterContext = createContext();

function App() {
  const [count, dispatch] = useReducer(
    singleCounterReducer,
    singleCounterInitialState
  );

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      <Main />
    </CounterContext.Provider>
  );
}

export default App;
