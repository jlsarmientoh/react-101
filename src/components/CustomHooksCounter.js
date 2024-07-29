import useContextMax from "../hooks/useCounterMax";

function CustomHooksCounter({max}) {

  if(!max) max = 5; // If max is not specified, it defaults to 5

  const [value, incr, decr, error] = useContextMax(max);

  function incrValue() {
    incr();
  }

  function decrValue() {
    decr();
  }

  return (
    <>
      <button onClick={incrValue}>value + 1</button>
      &nbsp;&nbsp;
      <button onClick={decrValue}>value - 1</button>
      &nbsp;
      =>
      value = {value};<br/>
      <b>{error}</b>
    </>
  )
}

export default CustomHooksCounter;