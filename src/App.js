import React from "react";
import "./styles.css";

var shoppingList = [
  "milk",
  "eggs",
  "bread",
  "flowers",
  "chocolates",
  "waffles"
];

export default function App() {
  function getBg(index) {
    if (index % 2 === 0) {
      return "white";
    }
    return "gray";
  }

  function listItemClickHandler(item) {
    console.log("clicked", item);
  }

  return (
    <div className="App">
      <h1>Print my shopping List</h1>
      <ul>
        {shoppingList.map(function (item, index) {
          return (
            <li
              key={item}
              onClick={() => listItemClickHandler(item)}
              style={{ backgroundColor: getBg(index), padding: "1rem" }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * this is how you print list in jsx
 */
