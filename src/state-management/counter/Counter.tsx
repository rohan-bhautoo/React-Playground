import { useReducer } from "react";
import counderReducer from "./counterReducer";

const Counter = () => {
  const [value, dispatch] = useReducer(counderReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
