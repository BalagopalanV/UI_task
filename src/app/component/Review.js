import React from "react";
// import styles from "../scss/component/Review.scss";
function Review(props) {
  return (
    <div className="text-and-value-container">
      <h1 className="value-text" style={{ color: `${props.color}` }}>
        {props.value}
      </h1>
      <h1 className="lable">{props.text}</h1>
    </div>
  );
}

export default Review;
