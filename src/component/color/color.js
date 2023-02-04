import React, { useState } from "react";
import "./color.css"

function Color() {
  const [colors, setColors] = useState([]);
//   const colors = [];
  const createColor = () => {
    // console.log("first");
    // console.log(colors);
    const first = Math.floor(Math.random() * (225 - 0 + 1)) + 0;
    const second = Math.floor(Math.random() * (225 - 0 + 1)) + 0;
    const third = Math.floor(Math.random() * (225 - 0 + 1)) + 0;
    const color = `rgb(${first},${second},${third})`;
    setColors([color,...colors])
  };
  return (
    <div className="colorContainer">
      <p className="title">question1</p>
      <button onClick={createColor} className="AddColor">Add Color</button>

      {colors.length > 0 &&
        colors.map((color) => (
          <div key={color} style={{ background: `${color}`,width:"150px",height:"150px" ,margin:"1rem auto"}}>{color}</div>
        ))}
    </div>
  );
}

export default Color;
