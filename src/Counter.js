import { useEffect, useRef, useState } from "react";

function Counter({init, end, autostart}) {
  init = parseInt(init || 0);
  end = parseInt(end || 0);
  autostart = parseInt(autostart || 0);
  const [count, setCount] = useState(init);
  const [start, setStart] = useState(true); // true for displaying the Start button
  const valueRef = useRef(0);

  function incrementRef() {
    valueRef.current += 1;
  }

  useEffect(function() {
    if(!start) {
      // The start button is not displayed; you can initiate the timer.
      var timer = setInterval(function() {
        setCount((count) => {
          var newCount = count + 1;
          if (newCount >= end) setStart(true);

          return newCount;
        });
      }, 1000);
    }
    /**
     * If a function is returned by useEffect(),
     * it allows performing a treatment
     * before each component update
     * */
    return function() {
      clearInterval(timer);
    }
  });

  useEffect(function() {
    if (autostart) restart()
  }, []);

  function restart() {
    setStart(false); // Hide the start button
    setCount(init); // Reset "count" to the initial value.
  }

  

  return (
    <>
      Initial value of the counter is: {init}
      <br/>
      End of the counter at: {end}
      <br/>
      The counter is: {count}
      <br/>
      {
        (start) 
        ? <><b style={{color:"red", fontSize:"20px"}}>Counter stopped</b>&nbsp;<button onClick={restart}>Start</button></>
        : <i style={{color:"green", fontSize:"16px"}}>Counter in progress</i>
      }
      <br />
      <button onClick={incrementRef}>ref + 1</button>&nbsp; {'=>'} ref = {valueRef.current}
      <br /> 
    </>
  )
}

export default Counter;