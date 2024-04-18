import React from "react";
import Imagecontent from "../component/Imagecontent";
import imageTop from "../asset/image/img_top.svg";
import imageBottom from "../asset/image/img_bottom.svg";
import imageRight from "../asset/image/img_right.svg";
import imageLeft from "../asset/image/img_left.svg";
import greenStar from "../asset/image/img_green_star.svg";
import Image from "next/image";
import dottedImage from "../asset/image/img_dotted.svg";
import Label from "../component/Label";

function Fourthsection() {
  return (
    <div className="four-section">
      <div className="main-contianer">
        <div className="header">
          <h1 className="heading">Shop by categories</h1>
        </div>
        <div className="body-container">
          <div className="imageContainer">
            <Imagecontent imageUrl={imageTop} />
            <Label value={"Dress & jumpsuit"} />
          </div>
          <div className="second-imageContainer">
            <Imagecontent imageUrl={imageBottom} />
            <Label value={"Dress & jumpsuit"} />
          </div>
          <div className="third-imageContainer">
            <Imagecontent imageUrl={imageLeft} />
            <Label value={"Dress & jumpsuit"} />
            <div className="dotted-circle">
              <Image
                src={dottedImage}
                className="dotted-image"
                alt="dotted-image"
                priority
              />
            </div>
          </div>
          <div className="fourth-imageContainer">
            <div className="circle">
              <Image
                src={greenStar}
                alt="Picture of the author"
                className="purple-image"
                priority
              />
            </div>
            <Imagecontent imageUrl={imageRight} />
            <Label value={"Dress & jumpsuit"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourthsection;
