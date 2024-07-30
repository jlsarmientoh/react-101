import './App.css';
import Counter from './components/Counter';
import CustomHooksCounter from './components/CustomHooksCounter';
import useForceUpdate from './hooks/useForceUpdate';
import InputCounter from './components/InputCounter';
import PreviousStateInput from './components/PreviousStateInput';
import ReducerCounter from './components/ReducerCounter';
import React from 'react';
import { useState } from "react";
import Countries from './components/Countries';
import Items from './components/Items';

function App() {

  const [total, setTotal] = useState(0);
  const forceUpdate = useForceUpdate();
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  function add() {
    var item = "Item " + (items.length + 1);
    items.push(item);
    setItems([...items]);
  }

  function refresh() {
    forceUpdate();
  }

  function change(event) {
    var value = event.target.value;
    setName(value);
  }

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
      <br/>
      <button onClick={refresh}>Refresh</button>

      <hr style={{margin:'10px', height:'3px', backgroundColor:'gray'}}/>
      <InputCounter focus setTotal={setTotal}/> <hr />
      <InputCounter setTotal={setTotal}/> <hr />
      <InputCounter setTotal={setTotal}/> <hr />

      <b>Total: {total}</b>

      <hr style={{margin:'10px', height:'3px', backgroundColor:'gray'}}/>
      Reducer Counter # 1 : <ReducerCounter/>
      <hr/>
      Reducer Counter # 2 : <ReducerCounter/>

      <hr style={{margin:'10px', height:'3px', backgroundColor:'gray'}}/>
      Custom Hooks Counter #1 : <CustomHooksCounter max={5} />
      <hr/>
      Custom Hooks Counter #2 : <CustomHooksCounter max={10} />

      <hr style={{margin:'10px', height:'3px', backgroundColor:'gray'}}/>
      Custom Hooks Input #1 : <PreviousStateInput />

      <hr style={{margin:'10px', height:'3px', backgroundColor:'gray'}}/>
      Country: <input type='text' onChange={change}/>
      <br/><br/>
      <Countries name={name}/>
      <br></br>
      <hr style={{margin:'10px', height:'3px', backgroundColor:'gray'}}/>
      <button onClick={add}>Add Item</button>
      <Items items={items} setItems={setItems}/>
    </>
  );
}

export default App;
