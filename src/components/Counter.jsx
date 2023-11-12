import { useReducer } from "react";
import "./Counter.css";

const initialState = {
  step: 1,
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCR_STEP":
      return { ...state, step: state.step + 1 };
    case "DECR_STEP":
      return { ...state, step: state.step - 1 };
    case "INCR_COUNT":
      return { ...state, count: state.count + state.step };
    case "DECR_COUNT":
      return { ...state, count: state.count - state.step };
    default:
      return state;
  }
};

const calculateDate = (count) => {
  const currentDate = new Date();
  const targetDate = new Date(currentDate);

  targetDate.setDate(targetDate.getDate() + count);

  return targetDate;
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter-wrapper">
      <div className="specialBtn">
        <button onClick={() => dispatch({ type: "DECR_STEP" })}>-</button>
        <span className="insideBtn">Step: {state.step}</span>
        <button onClick={() => dispatch({ type: "INCR_STEP" })}>+</button>
      </div>
      <div className="specialBtn">
        <button onClick={() => dispatch({ type: "DECR_COUNT" })}>-</button>
        <span className="insideBtn">Count: {state.count}</span>
        <button onClick={() => dispatch({ type: "INCR_COUNT" })}>+</button>
      </div>
      <div>
        <span>
          {state.count === 0
            ? "Today is "
            : state.count > 0
            ? `${state.count} days from today is `
            : `${Math.abs(state.count)} days ago from today was `}
        </span>
        <span>{calculateDate(state.count).toDateString()}</span>
      </div>
    </div>
  );
};

export default Counter;
