import './App.css';
import Counter from './Counter';
import InputCounter from './InputCounter';
import ReducerCounter from './ReducerCounter';
import React from 'react';
import { useState } from "react";

function App() {

  const [total, setTotal] = useState(0);
  return (
    <>
      {/* JSX code of the components returned by the component */}
      {
        [...Array(3).keys()].map(function(i) {
          var val = i < 2 ? '1' : '0'; // Value fo the "autostart" attribute
          return(
            <React.Fragment key={i}>
              Counter {i} defined by {`<Counter autostart='${val}' init = '5' end='${10 + i}'/>`} : <br/> <Counter autostart={val} init="5" end={10 + i}/>
              <br/> <br/>
            </React.Fragment>
          )
        })
      }
      <hr />
      <InputCounter focus setTotal={setTotal}/> <hr />
      <InputCounter setTotal={setTotal}/> <hr />
      <InputCounter setTotal={setTotal}/> <hr />

      <b>Total: {total}</b>
      <hr />
      Reducer Counter # 1 : <ReducerCounter/>
      <hr style={{margin:'10px', height:'3px', backgroundColor:'gray'}}/>
      Reducer Counter # 2 : <ReducerCounter/>
    </>
  );
}

export default App;
