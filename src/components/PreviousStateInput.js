import { useState } from "react";
import usePreviousState from "../hooks/usePreviousState";
import useForceUpdate from "../hooks/useForceUpdate";

function PreviousStateInput() {
  const [value, setValue] = useState(""); // Current content of the input field
  const prevValue = usePreviousState(value); // Previous content of the input field
  const forceUpdate = useForceUpdate();

  function change(event) {
    var value = event.target.value;
    setValue(value);
  }

  function keydown(event) {
    if (event.key === "Backspace" || event.key === "Delete") forceUpdate();
  }

  return (
    <>
      Current Value : <input type="text" onChange={change} onKeyDown={keydown}/><br/>
      Previous value : {prevValue}
    </>
  )
}

export default PreviousStateInput;