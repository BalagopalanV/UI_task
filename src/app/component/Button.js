import React from "react";
import Image from "next/image";
import styles from "../scss/component/Button.scss";
import polygon from "../asset/image/img_polygon.svg";
import whiteArrow from "../asset/image/img_white_arrow.svg";
import blackArrow from "../asset/image/img_btnBlack_arrow.svg";
function Button(props) {
  return (
    <div className="btn-container">
      <div
        className="btn-content"
        style={{
          boxShadow:
            props.text == "Explore" ? "7px 7px white" : "7px 7px black",
        }}
      >
        <label className="btn-text">{props.text}</label>
        <Image
          src={props.whiteArrow ? whiteArrow : blackArrow}
          className="img-arrow"
          alt="img-arrow"
        />
      </div>
      {props.isFlag == true ? (
        <div className="play-icon-container">
          <Image
            src={polygon}
            className="img-polygon"
            alt="play-icon-container"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
