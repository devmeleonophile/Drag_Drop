import React from "react";
import "./Birthday.css";
function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id} className="bday-persons">
            <img src={image} alt="bday-images"></img>
            <div>
              <h3 id="name">{name}</h3>
              <p id="age">{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default List;
