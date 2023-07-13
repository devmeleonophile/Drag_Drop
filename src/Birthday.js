import React, { useState } from "react";
import "./BirthDay.css";

function Birthday() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const onDrag = (Drag, widget) => {
    Drag.dataTransfer.setData("Items", widget);
  };
  console.log(text);

  function dropItem(event) {
    const draggedItem = event.dataTransfer.getData("Items");
    setItems([...items, draggedItem]);
  }
  const pageController = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="Main_container">
        <div
          draggable
          className="item item1"
          onDragStart={(e) => onDrag(e, "item A")}
        >
          Item A
        </div>
        <div
          draggable
          className="item item2"
          onDragStart={(e) => onDrag(e, "item B")}
        >
          Item B
        </div>
        <div
          draggable
          className="item item3"
          onDragStart={(e) => onDrag(e, "item C")}
        >
          Item C
        </div>

        <div
          className="Drop"
          onDrop={(event) => dropItem(event)}
          onDragOver={(e) => pageController(e)}
        >
          {items.map((item, index) => {
            return (
              <div className="droppedItems" key={index}>
                {item}
              </div>
            );
          })}
        </div>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
}

export default Birthday;
