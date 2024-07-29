import { useReducer } from "react";

function ReducerCounter() {

  const valueIncr = 10; // +10 for each increment
  const valueDecr = 10; // -10 for each decrement

  const [state, dispatch] = useReducer(function(state, action){
    if(action.type === "INCR") state.value += action.value;

    if(action.type === "DECR") state.value -= action.value;

    return { ...state }; // Definitively do not wirte return state.  You need to return a new object, as React observes the in memory reference instead of the object values, if you return the object it won't trigger a new render.
  }, {value: 0});

  function incrValue() {
    dispatch({type: "INCR", value: valueIncr});
  }

  function decrValue() {
    dispatch({type:"DECR", value: valueDecr});
  }

  return (
    <>
      <button onClick={incrValue}>value + {valueIncr}</button>
      &nbsp;&nbsp;
      <button onClick={decrValue}>value - {valueDecr}</button>
      &nbsp;
      =>
      value = {state.value};
    </>
  )
}

export default ReducerCounter;