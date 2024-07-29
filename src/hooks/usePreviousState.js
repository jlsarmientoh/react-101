import { useRef } from "react";

function usePreviousState(state) {
  var ref = useRef();
  var oldValue = ref.current;
  ref.current = state;  
  return oldValue;              
}
       
export default usePreviousState;