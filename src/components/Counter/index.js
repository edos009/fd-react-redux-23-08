import React from "react";
import { connect } from "react-redux";
import * as ActionCreators from "../../actions/actionsCounter";

function Counter(props) {
  const { count, step, incrementDispatch, decrementDispatch, setStepDispatch } =
    props;

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={incrementDispatch}>+</button>
      <button onClick={decrementDispatch}>-</button>
      <input
        type="number"
        value={step}
        onChange={({ target: { value } }) => setStepDispatch(Number(value))}
      />
    </>
  );
}

const mapStateToProps = ({ counter }) => {
  return counter;
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementDispatch: () => dispatch(ActionCreators.increment()),
    decrementDispatch: () => dispatch(ActionCreators.decrement()),
    setStepDispatch: (newStep) => dispatch(ActionCreators.setStep(newStep)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
