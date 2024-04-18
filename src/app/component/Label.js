import React from "react";
function Label(porps) {
  return (
    <div className="main-container" style={{ boxShadow: "5px 5px black" }}>
      <label>{porps.value}</label>
    </div>
  );
}

export default Label;
