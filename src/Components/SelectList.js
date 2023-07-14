import React, { useState, useEffect } from "react";
import '../App.css';
function SelectList() {
  const [list, setList] = useState([]);
  const [active, setActive] = useState(null);
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setList(json))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div>
      <h2>React Js Selectable Item List Item Example</h2>
      <ul className="list-group">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item)}
              className={`list-item ${active == item && "active"}`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default SelectList;