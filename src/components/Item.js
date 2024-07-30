import { useState } from "react";

function Item({name, index, setItems}) {
  const [modifyOn, setMofifyOn] = useState(false);
  const [text, setText] = useState(name);

  function remove() {
    setItems(function(items) {
      items = items.filter(function(item, i) {
        if (index == i) return false;
        else return true;
      });

      return [...items];
    });
  }

  function modify() {
    setMofifyOn(!modifyOn);
  }

  function change(event) {
    console.log(event.target.value);
    setText(event.target.value);
  }

  function blur(event) {
    //Remove the input filed
    setMofifyOn(false);
    //Modify the item in items variable
    setItems(function(items) {
      items[index] = event.target.value;
      return [...items];
    });
  }

  return (
    <li style={{ marginTop: "5px" }}>
      {
        modifyOn ? <input type="text" value={text} onChange={change} onBlur={blur}/> : <span>{text}</span>
      }
      &nbsp;
      <button onClick={modify}>Modify</button>
      &nbsp;
      <button onClick={remove}>Remove</button>
    </li>
  );
}

export default Item;
