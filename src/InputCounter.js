import { useEffect, useRef, useState } from "react";

function InputCounter({setTotal, focus}) {
  const [value, setValue] = useState("");
  const refCounter = useRef();

  useEffect(function(){
    // Give focus to the field if the focus attribute is indicated
    if(focus) refCounter.current.focus();
  }, []);

  function change(event) {
    var newValue = parseInt(event.target.value || 0);
    // New value in the field
    setValue(event.target.value);
    // New Total
    setTotal((total) => (total - value)); // Substract the old value
    setTotal((total) => (total + newValue)) // Add the new value
  }

  function keydown(event) {
    // Display the pressed key in the console
    console.log(event.key);
    // Allow the Backspace, Delete, ArrowLeft, ArrowRight, and Tab keys
    if(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)) return;

    // Then disallow all other keys except those from 0 to 9
    if (event.key < "0" || event.key > "9") event.preventDefault();
  }

  return (
    <>
      Input Counter: <input type="text" onChange={change} onKeyDown={keydown} ref={refCounter} /><br></br>
      Input Valure: {value}
    </>
  )
}

export default InputCounter;