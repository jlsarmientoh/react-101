import { useState } from "react";

function useContextMax(max) {
  const [value, setValue] = useState(0);
  var error = "";

  function incr() {
    if (value < max) setValue(value + 1); 
  }

  function decr() {
    setValue(value -1);
  }

  if (value >= max) error = `Message: the maximum (${max}) is reached`;

  return [value, incr, decr, error];
}

export default useContextMax;