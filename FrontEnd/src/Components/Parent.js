import React from "react";
import Person1 from "./Personn.js"; // Make sure to adjust the import path

const litzz = [
  {
    name: 'Vara',
    age: '21'
  },
  {
    name: 'Sam',
    age: '23'
  },
  {
    name: 'Kiran',
    age: '21'
  }
];

function Parent() {
  return (
    <div>
      {litzz.map((item, index) => (
        <Person1 peru={item.name} vayasu={item.age} />
      ))}
    </div>
  );
}

export default Parent;
